var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var obstacleGroup;

var moveUp, moveDown, moveLeft, moveRight;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("cycle.jpg");
  car2_img = loadImage("cycle.jpg");
  car3_img = loadImage("cycle.jpg");
  car4_img = loadImage("cycle.jpg");
  ground = loadImage("cycle.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstacleGroup = new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.y+5;
    //player.update();
    console.log("asfjvbsudhj")
  }

  if(keyIsDown(LEFT_ARROW)){
    player.y-5;
    //player.update();
  }
}
