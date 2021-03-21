var database,balloon,image;
var playerCount=0;
var gameState=0;

function preload() {
    //image=("HotAirBalloon.png");
}

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    balloon=createSprite(250,400,40,40);
}

function draw(){
    background("red");
    drawSprites();
}

function keyPressed(){
    if (keyCode===LEFT_ARROW) {
        balloon.x=balloon.x-10;
    }
    if (keyCode===RIGHT_ARROW) {
        balloon.x=balloon.x+10;
    }
    if (keyCode===UP_ARROW) {
        balloon.y=balloon.y-10;
        balloon.scale=balloon.scale-0.01;
    }
    if (keyCode===DOWN_ARROW) {
        balloon.y=balloon.y+10;
        balloon.scale=balloon.scale+0.01;
    }
}