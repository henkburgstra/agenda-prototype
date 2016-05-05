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

var agendaConstructor = function(width, height) {
	this.stage = new createjs.Stage("c");
	this.stage.canvas.width = width;
	this.stage.canvas.height = height;
	this.labelWidth = 70;	
	this.colWidth = 90;
	this.rowHeight = 30;	
	this.calendarStartTime = '7:30'; // TODO: configureerbaar maken	
	this.innerX = this.labelWidth;
	this.innerY = this.rowHeight;
	this.colX = this.labelWidth + 0.5;
	this.colY = 2;

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
		
		// Borders
		var l = new createjs.Shape();
		l.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
	//		.setStrokeDash([2, 3], 0)
			.moveTo(x, y)
			.lineTo(x, height)
			.endStroke();
		col.borders.push(l);
		
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
			group.on("pressmove", afspraakVerplaatsen);
			group.on("pressup", afspraakVerplaatst);
			
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
	this.createColumns = function(items) {
		var columns = [];
		for (var d = 0; d < items.dates.length; d++) {
			var day = items.dates[d];
			for (var col = 0; col < day.resources.length; col++) {
				var resource = day.resources[col];
				columns.push(this.createColumn(resource, this.colX, this.colY, this.colWidth, 800 - this.rowHeight));
				this.colX += this.colWidth;													
			}
		}
		return columns;	
	}
	
	// horizontalHeader
	this.horizontalHeader = function() {
		h = new createjs.Shape();
		h.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
			.beginFill("#C0A0B0")
			.rect(this.labelWidth, 0, this.innerWidth, this.rowHeight);
		this.stage.addChild(h);
	};
	
	// verticalHeader
	this.verticalHeader = function() {
		h = new createjs.Shape();
		h.graphics
			.setStrokeStyle(0.5)
			.beginStroke("black")
			.beginFill("#C0A0B0")
			.rect(0.5, 0.5, this.labelWidth, this.outerHeight);
		this.stage.addChild(h);		
	};
	
	// horizontalLines
	this.horizontalLines = function(hours) {
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
			if (!hour.officeHours) {
				r = new createjs.Shape();
				r.graphics
					.beginFill("#D4DCEC")
					.rect(this.innerX + 1, y, this.outerWidth, this.rowHeight);
				this.stage.addChild(r);
			}
		
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
			.beginStroke("black")
			.setStrokeDash([2, 3], 0)
		    .moveTo(0, y)
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

	// load
	this.load = function(hours, items) {
		this.columns = this.createColumns(items);
		this.innerWidth = this.columns.length * this.colWidth;
		this.outerWidth = this.labelWidth + this.innerWidth;
		this.innerHeight = hours.length * this.rowHeight;
		this.outerHeight = this.innerHeight + this.rowHeight;
		
		this.horizontalHeader();
		this.verticalHeader();
		this.horizontalLines(hours);

		for (var i = 0; i < this.columns.length; i++) {
			var col = this.columns[i];
			this.stage.addChild(col.header);
			for (var e = 0; e < col.roosters.length; e++) {
				this.stage.addChild(col.roosters[e]);
			}
			for (var e = 0; e < col.borders.length; e++) {
				this.stage.addChild(col.borders[e]);
			}
		}
		
		
		for (var i = 0; i < this.columns.length; i++) {
			var col = this.columns[i];
			for (var e = 0; e < col.afspraken.length; e++) {
				this.stage.addChild(col.afspraken[e]);
			}
		}
		var vCursor = this.stage.addChild(new createjs.Shape());
		vCursor.graphics.beginFill("red").drawRect(-2, -2, this.labelWidth, 2);
		vCursor.alpha = 0.7;
		vCursor.x = 0;
		vCursor.y = this.rowHeight;
		
		this.stage.on("stagemousemove", function(evt) {
			vCursor.y = evt.stageY;
		})
		//var kader = new createjs.Shape();
		//kader.graphics
		//	.setStrokeStyle(0.5)
		//	.beginStroke("black")
		//	.beginFill("#E0E8F8")
		//	.rect(0, 0, outerWidth, outerHeight);
		//stage.addChild(kader);
		
		
		
	};
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

var afspraakVerplaatsen = function(evt) {
	// todo: gedeelte van deze code verplaatsen naar press (klikAfspraak)?
	var afspraak = evt.target
	if (afspraak.isDragged) {
		var deltaX = evt.stageX - afspraak.dragX;
		var deltaY = evt.stageY - afspraak.dragY;
		afspraak.x = afspraak.x + deltaX;
		afspraak.y = afspraak.y + deltaY;
	}
	else {
		stage.setChildIndex(afspraak, stage.getNumChildren()-1);
		afspraak.isDragged = true;
		afspraak.dragStartX = afspraak.x;
		afspraak.dragStartY = afspraak.y;
	}
	afspraak.dragX = evt.stageX;
	afspraak.dragY = evt.stageY;
};

var afspraakVerplaatst = function(evt) {
	// todo: als de x- en y-coördinaat niet zijn gewijzigd,
	// roep dan afspraakTonen() aan.
	afspraak = evt.target;
	afspraak.isDragged = false;
	if ((afspraak.x != afspraak.dragStartX) || (afspraak.y != afspraak.dragStartY)) {
		alert("Afspraak verplaatst");
	}
	else {
		afspraakTonen(evt);
	}
};

var afspraakTonen = function(evt) {
	alert("Afspraak tonen");
};


var Label = function Label(width, height, color) {
	self.width = width;
	self.height = height;
	self.color = color;
};

var CalendarOptions = function CalendarOptions(startTime, hours, leftLabel, topLabel) {
	this.startTime = startTime;
	this.hours = hours;
	this.leftLabel = leftLabel;
	this.topLabel = topLabel;
};

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




