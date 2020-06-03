var car;
var position;
var database;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    car = createSprite(100,100,10,10);
    car.shapeColor = "red";
    var carposition = database.ref('car/position');
    carposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('car/position').set({
        'x' : position.x + x,
        'y' : position.y + y 
    });
}
function readposition(data){
position = data.val();
car.x = position.x;
car.y = position.y;

}
function showerror(){
console.log("error");
}