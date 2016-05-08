reTime = /^([0-9]*)[:.]([0-9]*).*$/;

var rasterConstructor = function() {
	this.rc = document.createElement("canvas");
	this.rc.width = 4;
	this.rc.height = 4;
	this.create = function(color) {
	    var ctx = this.rc.getContext('2d');
		ctx.strokeWidth = 0.1;
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(0, 4);
		ctx.lineTo(4, 0);
		ctx.stroke();
		return this.rc;		
	}
};
var raster = new rasterConstructor();

var createHScrollbar = function(stage, x, width, height, increment) {
	this.stage = stage;
	this.position = 0;
	this.increment = increment;
	this.scrollarea = null;
	this.virtualWidth = 0;
	this.scrollbar = stage.addChild(new createjs.Container());
	this.scrollbar.x = x;
	this.scrollbar.y = stage.canvas.height - height;
	this.scrollbar.width = width;
	this.scrollbar.height = height;
	this.bar = this.scrollbar.addChild(new createjs.Shape());
	this.bar.graphics.beginFill("black").drawRect(0, 0, this.scrollbar.width, this.scrollbar.height);
	this.bar.alpha = 0.1;
	this.scroller = this.scrollbar.addChild(new createjs.Shape());
	this.scroller.graphics.beginFill("black").drawRect(0, 0, this.scrollbar.height, this.scrollbar.height);
	this.scroller.alpha = 0.5;
	this.scroller.width = this.scrollbar.height;
	this.addToStage = true;
	parent = this;
	var bar = this.bar;
	var scroller = this.scroller;
	bar.addEventListener("rollover", function() {
		bar.alpha = 0.5;
		parent.scroller.alpha = 1;
	});
	bar.addEventListener("rollout", function() {
		bar.alpha = 0.1;
		parent.scroller.alpha = 0.5;
	});
	bar.addEventListener("click", function(evt) {
		if (evt.localX < scroller.x){
			parent.scrollRight();
		}
		else if (evt.localX > scroller.x + scroller.width) {
			parent.scrollLeft();
		}
	});
	this.updateScroller = function() {
		var perc = this.position / ((this.virtualWidth - this.scrollbar.width) * 0.01);
		this.scroller.x = Math.round(this.scrollbar.width * perc * 0.01);
	};
	// scrollLeft
	this.scrollLeft = function() {
		this.scrollarea.x = this.scrollarea.x - this.increment;
		this.position += this.increment;
		this.updateScroller();
	};
	// scrollRight
	this.scrollRight = function() {
		this.scrollarea.x = this.scrollarea.x + this.increment;
		this.position -= this.increment;
		this.updateScroller();
	};
	this.setBottom = function(y) {
		this.scrollbar.y = y - this.scrollbar.height;
	};
	this.setScrollarea = function(scrollarea) {
		this.scrollarea = scrollarea;
	};
	this.update = function(width, virtualWidth) {
		this.width = width;
		this.virtualWidth = virtualWidth;
		if (this.addToStage) {
			this.stage.addChild(this.scrollbar);
			this.addToStage = false;
		}
	};
};

var agendaConstructor = function(width, height) {
	var agenda = this;
	this.stage = new createjs.Stage("c");
	this.stage.canvas.width = width;
	this.stage.canvas.height = height;
	this.stage.enableMouseOver(10);
	this.scrollarea = null;
	this.labelWidth = 70;	
	this.colWidth = 90;
	this.rowHeight = 30;	
	this.calendarStartTime = '7:30'; // TODO: configureerbaar maken	
	this.innerX = this.labelWidth;
	this.innerY = this.rowHeight;
	this.colX = this.labelWidth + 0.5;
	this.colY = 2;
	this.dragging = false;
	this.dragY = 0;
	this.hScrollbar = new createHScrollbar(this.stage, this.labelWidth, this.stage.canvas.width - this.labelWidth, 20, this.colWidth);
	

	// createVerticalBorder
	this.createVerticalBorder = function(x, y, height) {
		var l = new createjs.Shape();
		l.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
			.moveTo(x, y)
			.lineTo(x, height)
			.endStroke();
		return l;
	};
	
	// createColumn
	this.createColumn = function(resource, x, y, width, height) {
		var col = {
			"header": null,
			"roosters": [],
			"borders": [],
			"afspraken": []
		};
	
		// Kolom header
		col.header = new createjs.Text(resource.key, "14px Verdana", "black");
		col.header.x = x + 1.5;
		col.header.y = y;
		
		// Rooster items
		for (var s = 0; s < resource.schedule.length; s++) {
			var schedule = resource.schedule[s];
			var scheduleY = this.timeStringToY(schedule.begin) + 0.5;
			var scheduleHeight = this.timeStringToY(schedule.end) + 0.5 - scheduleY;
	
			r = new createjs.Shape();
			r.graphics
				.beginBitmapFill(raster.create(colorFromActivities(schedule.activities)))
				.rect(x, scheduleY, width, scheduleHeight);
			col.roosters.push(r);
	
			var l = new createjs.Text(schedule.activities.join(), "11px Verdana", "#5a6d84");
			l.x = x + 2;
			l.y = scheduleY + 2;
			l.lineWidth = width - 2;
			l.mask = r;
			col.roosters.push(l);
		
		}
		
		col.borders.push(this.createVerticalBorder(x, y, height));
		
		//Afspraak items	
		for (var a = 0; a < resource.items.length; a++) {
			var appointment = {};
			appointment.key = resource.items[a];
			var part1 = items.appointments[appointment.key];
			var part2 = items.groups[part1.group];
			appointment.begin = part1.begin;   // TODO: timeslots (tijdvakken)
			appointment.end = part1.end;
			appointment.activity = part2.activity;
			var appointmentY = this.timeStringToY(appointment.begin) + 0.5;
			
			var group = new createjs.Container();
			group.x = x;
			group.y = appointmentY;
			group.mouseChildren = false;
			group.on("pressmove", function(evt) {
				agenda.afspraakVerplaatsen(evt);
			});
			group.on("pressup", function(evt) {
				agenda.afspraakVerplaatst(evt);					
			});
			
			var a = new createjs.Shape();
			a.graphics
				.setStrokeStyle(0.5)
				.beginStroke("#5a6d84")
				.beginFill("#C0C0FF")
				.rect(0.5, 0.5, width, this.timeStringToY(appointment.end) + 0.5 - appointmentY);
			
			var l = new createjs.Text(appointment.activity, "13px Verdana", "#000000");
			l.x = 3;
			l.y = 3;
			l.lineWidth = this.colWidth - 3;
			l.mask = a;
			
			group.addChild(a, l);
			col.afspraken.push(group);
		}	
		return col;
	};

	// createColumns
	this.createColumns = function(hours, items) {
		var height = (hours.length + 1) * this.rowHeight;
		var columns = [];
		for (var d = 0; d < items.dates.length; d++) {
			var day = items.dates[d];
			for (var col = 0; col < day.resources.length; col++) {
				var resource = day.resources[col];
				columns.push(this.createColumn(resource, this.colX, this.colY, this.colWidth, height));
				this.colX += this.colWidth;													
			}
			if (columns.length > 0) {
				var col = columns[columns.length - 1];
				col.borders.push(this.createVerticalBorder(this.colX, this.colY, height));
			}
		}
		return columns;	
	}
	
	// drawHorizontalHeader
	this.drawHorizontalHeader = function() {
		h = new createjs.Shape();
		h.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
			.beginFill("#C0A0B0")
			.rect(this.labelWidth, 0, this.innerWidth, this.rowHeight);
		this.stage.addChild(h);
	};
	
	// drawVerticalHeader
	this.drawVerticalHeader = function(hours) {
		h = new createjs.Shape();
		h.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
			.beginFill("#C0A0B0")
			.rect(0.5, 0.5, this.labelWidth, this.outerHeight);
		this.stage.addChild(h);		

		for (var i = 0; i < hours.length; i++) {
			var hour = hours[i];
			y = this.innerY + (this.rowHeight * i);
		
			if (hour.officeHours) {
				var background = '#D0B0C0';
			}
			else {
				var background =  '#C0A0B0';
			}
			r = new createjs.Shape();
			r.graphics
				.beginFill(background)
				.rect(0.5, y, this.labelWidth - 1, this.rowHeight);
			this.stage.addChild(r);
		
			var tijd_x = 11.5;
			var tijd_y = y + 4;
			if (Math.floor(hour.time) == hour.time) {
				var tijd = hour.time;
			}
			else {
				var tijd = 30;  // TODO: minuten uitrekenen op basis van fractie (fraction2minute)
			}
			var font_size = 22;
			if (tijd == 30) {
				tijd_x = 44.5;
				tijd_y++;
				font_size = 14;
			}
			if (tijd < 10) {
				tijd_tekst = '0' + tijd;
			}
			else {
				tijd_tekst = '' + tijd;
			}
			var l = new createjs.Text(tijd_tekst, font_size + "px Verdana", "black");
			l.x = tijd_x;
			l.y = tijd_y;
			this.stage.addChild(l);
			if (tijd != 30) {
				var l = new createjs.Text('00', "14px Verdana", "black");
				l.x = 44.5;
				l.y = ++tijd_y;
				this.stage.addChild(l);
			}
			var l = new createjs.Shape();
		    l.graphics
			.setStrokeStyle(1)
			.beginStroke("#a88d9a")
		    .moveTo(0, y)
		    .lineTo(this.labelWidth, y)
		    .endStroke();
		    this.stage.addChild(l);   		
		}		
	};
	
	
	// drawHorizontalLines
	this.drawHorizontalLines = function(hours) {
		for (var i = 0; i < hours.length; i++) {
			var hour = hours[i];
			y = this.innerY + (this.rowHeight * i);
		
			if (!hour.officeHours) {
				r = new createjs.Shape();
				r.graphics
					.beginFill("#D4DCEC")
					.rect(this.innerX + 1, y, this.outerWidth, this.rowHeight);
				this.stage.addChild(r);
			}
		
			var l = new createjs.Shape();
		    l.graphics
			.setStrokeStyle(1)
			.beginStroke("black")
			.setStrokeDash([2, 3], 0)
		    .moveTo(this.labelWidth, y)
		    .lineTo(outerWidth, y)
		    .endStroke();
		    this.stage.addChild(l);   		
		}		
	};

	// timeStringToY
	this.timeStringToY = function(time) {
		var minutes = timeStringToMinutes(time);
		var difference = minutes - timeStringToMinutes(this.calendarStartTime);
		return this.innerY + ((difference / 30) * this.rowHeight);
	};
	
	// drawColumns
	this.drawColumns = function() {
		for (var i = 0; i < this.columns.length; i++) {
			var col = this.columns[i];
			this.scrollarea.addChild(col.header);
			for (var e = 0; e < col.roosters.length; e++) {
				this.scrollarea.addChild(col.roosters[e]);
			}
			for (var e = 0; e < col.borders.length; e++) {
				this.scrollarea.addChild(col.borders[e]);
			}
		}
		
		
		for (var i = 0; i < this.columns.length; i++) {
			var col = this.columns[i];
			for (var e = 0; e < col.afspraken.length; e++) {
				this.scrollarea.addChild(col.afspraken[e]);
			}
		}		
	};
	// scrollLeft
	this.scrollLeft = function() {
		this.scrollarea.x = this.scrollarea.x - this.colWidth;
	};
	// scrollRight
	this.scrollRight = function() {
		this.scrollarea.x = this.scrollarea.x + this.colWidth;
	};
	// drawScrollIndicatorRight
	this.drawScrollIndicatorRight = function() {
		var indicator = this.stage.addChild(new createjs.Shape());
		var w = 20;
		var agenda = this;
		indicator.graphics.beginFill("black").drawRect(this.stage.canvas.width - w, this.rowHeight, w, this.innerHeight);
		indicator.alpha = 0.1;
		indicator.addEventListener("rollover", function() {
			indicator.alpha = 0.5;
		});
		indicator.addEventListener("rollout", function() {
			indicator.alpha = 0.1;
		});
		indicator.addEventListener("click", function() {
			agenda.scrollLeft();
		})
	};
	// drawScrollIndicatorLeft
	this.drawScrollIndicatorLeft = function() {
		var indicator = this.stage.addChild(new createjs.Shape());
		var w = 20;
		var agenda = this;
		indicator.graphics.beginFill("black").drawRect(this.labelWidth, this.rowHeight, w, this.innerHeight);
		indicator.alpha = 0.1;
		indicator.addEventListener("rollover", function() {
			indicator.alpha = 0.5;
		});
		indicator.addEventListener("rollout", function() {
			indicator.alpha = 0.1;
		});
		indicator.addEventListener("click", function() {
			agenda.scrollRight();
		})
	};
	
	this.needHorizontalScrolling = function() {
		return this.stage.canvas.width < (this.labelWidth + (this.columns.length * this.colWidth));
	};

	// load
	this.load = function(hours, items) {
		this.columns = this.createColumns(hours, items);
		this.innerWidth = this.columns.length * this.colWidth;
		this.outerWidth = this.labelWidth + this.innerWidth;
		this.innerHeight = hours.length * this.rowHeight;
		this.outerHeight = this.innerHeight + this.rowHeight;
		
		this.drawHorizontalHeader();
		this.drawHorizontalLines(hours);
		
		this.scrollarea = new createjs.Container();
		this.drawColumns();
		this.stage.addChild(this.scrollarea);

		this.drawVerticalHeader(hours);
		if (this.needHorizontalScrolling()) {
			this.drawScrollIndicatorLeft();
			this.drawScrollIndicatorRight();			
		}
		this.hScrollbar.setScrollarea(this.scrollarea);
		this.hScrollbar.setBottom(this.outerHeight);
		this.hScrollbar.update(this.stage.canvas.width - this.labelWidth, this.innerWidth);
		
		var vCursor = this.stage.addChild(new createjs.Shape());
		vCursor.graphics.beginFill("red").drawRect(-2, -2, this.labelWidth, 2);
		vCursor.alpha = 0.7;
		vCursor.x = 0;
		vCursor.y = this.rowHeight;
		
		this.stage.on("stagemousemove", function(evt) {
			if (agenda.dragging) {
				vCursor.y = agenda.dragY;
			}
			else {
				vCursor.y = evt.stageY;				
			}
		})
		//var kader = new createjs.Shape();
		//kader.graphics
		//	.setStrokeStyle(0.5)
		//	.beginStroke("black")
		//	.beginFill("#E0E8F8")
		//	.rect(0, 0, outerWidth, outerHeight);
		//stage.addChild(kader);		
		
		
	};
	// afspraakVerplaatsen	
	this.afspraakVerplaatsen = function(evt) {
		// todo: gedeelte van deze code verplaatsen naar press (klikAfspraak)?
		var afspraak = evt.target;
		if (afspraak.isDragged) {
			this.dragging = true;
			var deltaX = evt.stageX - afspraak.dragX;
			var deltaY = evt.stageY - afspraak.dragY;
			afspraak.x = afspraak.x + deltaX;
			afspraak.y = afspraak.y + deltaY;
			this.dragY = afspraak.y;
		}
		else {
			// onderstaande regel "topt" de afspraak.
			this.scrollarea.setChildIndex(afspraak, this.scrollarea.getNumChildren() - 1);
			afspraak.isDragged = true;
			afspraak.dragStartX = afspraak.x;
			afspraak.dragStartY = afspraak.y;
		}
		afspraak.dragX = evt.stageX;
		afspraak.dragY = evt.stageY;
	};
	
	// afspraakVerplaatst
	this.afspraakVerplaatst = function(evt) {
		var afspraak = evt.target;
		afspraak.isDragged = false;
		if (afspraak.dragStartX == undefined || (afspraak.x == afspraak.dragStartX && afspraak.y == afspraak.dragStartY)) {
			this.afspraakTonen(evt);
		}
		else {
			this.drop(afspraak);
		}
	};
	
	// afspraakTonen
	this.afspraakTonen = function(evt) {
		alert("Afspraak tonen");
	};
	
	this.drop = function(afspraak) {
		this.dragging = false;
		var x = this.labelWidth + 0.5;
		if (afspraak.x > x) {
			while (afspraak.x > x + this.colWidth) {
				x += this.colWidth;
			}
		}
		afspraak.x = x;
		afspraak.dragStartX = afspraak.x;
		afspraak.dragStartY = afspraak.y;
	}

};



var hours = [
	{time: 7.5, officeHours: false}, {time: 8, officeHours: true}, {time: 8.5, officeHours: true}, 
	{time: 9, officeHours: true}, {time: 9.5, officeHours: true}, {time: 10, officeHours: true},
	{time: 10.5, officeHours: true}, {time: 11, officeHours: true}, {time: 11.5, officeHours: true}, 
	{time: 12, officeHours: false}, {time: 12.5, officeHours: false}, {time: 13, officeHours: true}, 
	{time: 13.5, officeHours: true}, {time: 14, officeHours: true}, {time: 14.5, officeHours: true},
	{time: 15, officeHours: true}, {time: 15.5, officeHours: true}, {time: 16, officeHours: true},
	{time: 16.5, officeHours: true}, {time: 17, officeHours: true}, {time: 17.5, officeHours: true},
	{time: 18, officeHours: false}
];


var hoursFromTimeString = function(time) {
	match = time.match(reTime);
	if (match == null) {
		return 0;
	}
	return parseInt(match[1]);
}

var minutesFromTimeString = function(time) {
	match = time.match(reTime);
	if (match == null) {
		return 0;
	}
	return parseInt(match[2]);				
}

var timeStringToMinutes = function(time) {
	var hours = hoursFromTimeString(time);
	var minutes = minutesFromTimeString(time);
	if (hours || minutes) {
		return minutes + (60 * hours);					
	}
	return 0;
};


var colors = [];
colors.push('#8080ff');
var activityCodes = Object.keys(activities);

var colorFromActivities = function(itemActivities) {
	var color = '#8080ff';
	if (itemActivities.length > 0) {
		var activity = activities[itemActivities[0]];
		if (activity != undefined) {
			color = activity.color;
		}
	} 
	return color;
};


for (var i = 0; i < activityCodes.length; i++) {
	var color = activities[activityCodes[i]].color;
	if (colors.indexOf(color) == -1) {
		colors.push(color);
	} 
}


var container = document.getElementById('agenda');
var rect = container.getBoundingClientRect();
agenda = new agendaConstructor(rect.right - rect.left, rect.bottom - rect.top);
window.addEventListener("resize", function() {
	var rect = container.getBoundingClientRect();
	agenda.stage.canvas.width = rect.right - rect.left;
	agenda.stage.canvas.height = rect.bottom - rect.top;;
});
agenda.load(hours, items);
createjs.Ticker.addEventListener("tick", function() {
	agenda.stage.update();
});




