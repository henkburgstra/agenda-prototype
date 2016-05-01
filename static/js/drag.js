var stage = new createjs.Stage("canvas");
createjs.Ticker.addEventListener("tick", tick);

// The DragBox listens to mouse events.
var dragBox = new createjs.Shape(new createjs.Graphics().beginFill("#ff0000").drawRect(0,0,stage.canvas.width, stage.canvas.height));
dragBox.addEventListener("mousedown", startDrag);   
dragBox.addEventListener("pressmove", doDrag);
stage.addChild(dragBox);

// Container to drag around
var dragContainer = new createjs.Container();
stage.addChild(dragContainer);

// Create lots of things on the stage.
var g = new createjs.Graphics().beginFill("#000000").drawCircle(0,0,50);
for (var i=0, l=300; i<l; i++) {
    var scale = Math.random() * 3 - 2.5;
    var box = new createjs.Shape(g)
    .set({scaleX:scale, scaleY: scale, alpha:Math.random()*0.5+0.5, x:Math.random() * 5000 - 2500, y:Math.random()*5000-2500});
    dragContainer.addChild(box);
}

// Drag
var offset = new createjs.Point();

function startDrag(event) {
    offset.x = stage.mouseX - dragContainer.x;
    offset.y = stage.mouseY - dragContainer.y;
}
function doDrag(event) {
    dragContainer.x = event.stageX - offset.x;
    dragContainer.y = event.stageY - offset.y;		
}

// Update the stage
function tick(event) {
    stage.update();
}