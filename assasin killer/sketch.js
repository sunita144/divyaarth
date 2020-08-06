var canvas, backgroundImage;

var gameState = 0;
var player;
var enemy;
var wall1;

function preload(){
  maze = loadImage("maze.jpg");
  playerImg = loadImage("player.png");
  playerIg = loadImage("soldies.png");
  player1Img = loadImage("playere1.png");
  player2Img = loadImage("player2.png");
  player3Img = loadImage("player3.png");
 
  enemy2Img= loadImage("enemy2.png");
  enemy3Img= loadImage("enemy3.png");
  enemy4Img = loadImage("enemy4.png");
}
  function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight-30);
player = createSprite(450, 270, 50, 50);
enemy1 = createSprite(590,415,20,20);
enemy1.addImage(enemy2Img);
enemy2 = createSprite(1000,55,20,20);
enemy2.addImage(enemy2Img);
enemy3 = createSprite(600,535,20,20);
enemy3.addImage(enemy3Img);
enemy4 = createSprite(400,175,20,20);
enemy4.addImage(enemy4Img);
enemy1.scale =0.15;
enemy2.scale =0.25;
enemy3.scale =0.25;
enemy4.scale =0.25;
enemy1.velocityX=-2;
enemy2.velocityX=5
enemy3.velocityX=4
enemy4.velocityX=-4
 player.addImage(player1Img);
 player.scale = 0.25;
 maze.scale = 1.5;

 wall1= createSprite(600,20,1000,20);
 wall2 = createSprite(1045,310,20,515);
 wall3 = createSprite(600,625,1000,20);
 wall4 = createSprite(190,360,20,515);
 wall5 = createSprite(225,85,120,20);
 wall6 = createSprite(450,60,20,70);
 wall7 = createSprite(620,90,20,120);
 wall8 = createSprite(795,90,20,120);
 wall9 = createSprite(410,85,120,20);
 wall10 = createSprite(1010,140,120,20);
 wall11= createSprite(700,205,700,20);
 wall12 = createSprite(705,130,20,110);
 wall13 = createSprite(1010,260,120,20); 
 wall14 = createSprite(920,80,120,20); 
 wall15 = createSprite(880,190,20,230);
 wall16 = createSprite(875,325,200,20); 
 wall17 = createSprite(745,265,120,20); 
 wall18 = createSprite(705,320,20,110);
 wall19 = createSprite(890,385,400,20); 
 wall20 = createSprite(530,110,20,70);
 wall21 = createSprite(410,145,200,20);
 wall22 = createSprite(275,200,20,130);
 wall23 = createSprite(455,265,290,20);
 wall24 = createSprite(620,300,20,70); 
 wall25 = createSprite(415,325,370,20);
 wall26 = createSprite(320,385,120,20);
 wall27 = createSprite(365,500,20,200);
 wall28 = createSprite(455,445,180,20);
 wall29 = createSprite(315,505,110,20);
 wall30 = createSprite(495,565,270,20);
 wall31 = createSprite(225,445,120,20);
 wall32 = createSprite(225,565,120,20);
 wall33 = createSprite(540,385,190,20);
 wall34 = createSprite(795,445,360,20);
 wall35 = createSprite(620,505,340,20);
 wall36 = createSprite(705,565,20,110);
 wall37 = createSprite(875,500,20,130);
 wall38 = createSprite(1010,505,250,20);
 wall39 = createSprite(960,585,20,60);
 wall40 = createSprite(835,565,100,20);
 wall41 = createSprite(620,420,20,70);  
 }

  function draw() {
   // enemyCollide();
console.log(enemy1.x,enemy1.y)
  background("orange");
  image(maze,20,-100,1200,900);
  //player.debug=true;
ghostControls();

  collideAndVisibility();
  player.setCollider("circle",0,0,90)
  enemy1.setCollider("circle",0,0,30)
   if(keyWentDown("space")){
    player.addImage(playerIg);
  }
  if(keyWentUp("space")){
    player.addImage(playerImg);
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y-3
    player.addImage(playerImg);
  }  
  if(keyDown("DOWN_ARROW")){
    player.y =player.y+3
    player.addImage(player2Img);
  }  
  if(keyDown("RIGHT_ARROW")){
    player.x =player.x+3
    player.addImage(player1Img);
  }  
  if(keyDown("LEFT_ARROW")){
    player.x =player.x-3
    player.addImage(player3Img);
  }  
  drawSprites();
}
function enemyCollide(){
if (enemy1.isTouching(player)) {
  lives = lives - 1;
  player.x = 20;
  player.y = 122;
  player.velocityX = 0;
  player.velocityY = 0;
}
if (enemy2.isTouching(player)) {
  lives = lives - 1;
  player.x = 20;
  player.y = 122;
  player.velocityX = 0;
  player.velocityY = 0;
}
if (enemy3.isTouching(player)) {
  lives = lives - 1;
  player.x = 20;
  player.y = 122;
  player.velocityX = 0;
  player.velocityY = 0;
}
if (enemy4.isTouching(player)) {
  lives = lives - 1;
  player.x = 20;
  player.y = 122;
  player.velocityX = 0;
  player.velocityY = 0;
}
}
function ghostControls() {
  if (enemy1.x <395) {
    enemy1.velocityY = -2;
    enemy1.velocityX = 0;
  }
  if (enemy1.y <338) {
    enemy1.velocityY = 0;
    enemy1.velocityX = 2;
  }
  if (enemy1.x ==690.5 && enemy1.y<400) {
    enemy1.velocityY = -2;
    enemy1.velocityX = 0;
  }
  
  if (enemy2.isTouching(wall7)) {
    enemy2.velocityX = -5;
    enemy2.velocityY = 0;
  }
  if (enemy2.isTouching(wall41)) {
    enemy2.velocityX = 0;
    enemy2.velocityY = 5;
  }
  if (enemy3.isTouching(wall16)) {
    enemy3.velocityX = -5;
    enemy3.velocityY = 0;
  }
  if (enemy3.isTouching(wall3)) {
    enemy3.velocityY = 5;
    enemy3.velocityX = 0;
  }
  if (enemy3.isTouching(wall3)) {
    enemy3.velocityY = 0;
    enemy3.velocityX = 5;
  }
  if (enemy3.isTouching(wall15)) {
    enemy3.velocityY = 5;
    enemy3.velocityX = 0;
  }
  if (enemy3.isTouching(wall29)) {
    enemy3.velocityY = 0;
    enemy3.velocityX = 5;
  }
  if (enemy3.isTouching(wall4)) {
    enemy3.velocityY = -5;
    enemy3.velocityX = 0;
  }
  if (enemy3.y <= 69) {
    enemy3.velocityY = 0;
    enemy3.velocityX = -5;
  }
  if (enemy3.isTouching(wall8)) {
    enemy3.velocityY = 5;
    enemy3.velocityX = 0;
  }
  
  if (enemy4.isTouching(wall18)) {
    enemy4.velocityX = 5;
    enemy4.velocityY = 0;
  }
  if (enemy4.isTouching(wall4)) {
    enemy4.velocityY = -5;
    enemy4.velocityX = 0;
  }
  if (enemy4.isTouching(wall2)) {
    enemy4.velocityY = 0;
    enemy4.velocityX = -5;
  }
  if (enemy4.isTouching(wall17)) {
    enemy4.velocityY = -5;
    enemy4.velocityX = 0;
  }
  if (enemy4.isTouching(wall40)) {
    enemy4.velocityY = 0;
    enemy4.velocityX = -5;
  }
  if (enemy4.isTouching(wall11)) {
    enemy4.velocityY = 5;
    enemy4.velocityX = 0;
  }
  if (enemy4.y >= 210) {
    enemy4.velocityY = 0;
    enemy4.velocityX = 5;
  }
  if (enemy4.isTouching(wall22)) {
    enemy4.velocityY = -5;
    enemy4.velocityX = 0;
  }
  
}

function collideAndVisibility(){

  wall1.visible =false;
  wall2.visible =false;
  wall3.visible =false;
  wall4.visible =false;
  wall5.visible =false;
  wall6.visible =false;
  wall7.visible =false;
  wall8.visible =false;
  wall9.visible =false;
  wall10.visible =false;
  wall11.visible =false;
  wall12.visible =false;
  wall13.visible =false;
  wall14.visible =false;
  wall15.visible =false;
  wall16.visible =false;
  wall17.visible =false;
  wall18.visible =false;
  wall19.visible =false;
  wall20.visible =false;
  wall21.visible =false;
  wall22.visible =false;
  wall23.visible =false;
  wall24.visible =false;
  wall25.visible =false;
  wall26.visible =false;
  wall27.visible =false;
  wall28.visible =false;
  wall29.visible =false;
  wall30.visible =false;
  wall31.visible =false;
  wall32.visible =false;
  wall33.visible =false;
  wall34.visible =false;
  wall35.visible =false;
  wall36.visible =false;
  wall37.visible =false;
  wall38.visible =false;
  wall39.visible =false;
  wall40.visible =false;
  wall41.visible =false;

  enemy2.collide(wall1)
  enemy2.collide(wall2)
  enemy2.collide(wall3)
  enemy2.collide(wall4)
  enemy2.collide(wall5)
  enemy2.collide(wall7)
  enemy2.collide(wall8)
  enemy2.collide(wall9)
  enemy2.collide(wall10)
  enemy2.collide(wall11)
  enemy2.collide(wall13)
  enemy2.collide(wall14)
  enemy2.collide(wall15)
  enemy2.collide(wall16)
  enemy2.collide(wall17)
  enemy2.collide(wall18)
  enemy2.collide(wall19)
  enemy2.collide(wall20)
  enemy2.collide(wall21)
  enemy2.collide(wall22)
  enemy2.collide(wall23)
  enemy2.collide(wall24)
  enemy2.collide(wall25)
  enemy2.collide(wall26)
  enemy2.collide(wall27)
  enemy2.collide(wall28)
  enemy2.collide(wall29)
  enemy2.collide(wall30)
  enemy2.collide(wall31)
  enemy2.collide(wall32)
  enemy2.collide(wall33)
  enemy2.collide(wall34)
  enemy2.collide(wall35)
  enemy2.collide(wall36)
  enemy2.collide(wall37)
  enemy2.collide(wall38)
  enemy2.collide(wall39)
  enemy2.collide(wall40)
 enemy2.collide(wall41) 

 enemy3.collide(wall1)
  enemy3.collide(wall2)
  enemy3.collide(wall3)
  enemy3.collide(wall4)
  enemy3.collide(wall5)
  enemy3.collide(wall7)
  enemy3.collide(wall8)
  enemy3.collide(wall9)
  enemy3.collide(wall10)
  enemy3.collide(wall11)
  enemy3.collide(wall13)
  enemy3.collide(wall14)
  enemy3.collide(wall15)
  enemy3.collide(wall16)
  enemy3.collide(wall17)
  enemy3.collide(wall18)
  enemy3.collide(wall19)
  enemy3.collide(wall20)
  enemy3.collide(wall21)
  enemy3.collide(wall22)
  enemy3.collide(wall23)
  enemy3.collide(wall24)
  enemy3.collide(wall25)
  enemy3.collide(wall26)
  enemy3.collide(wall27)
  enemy3.collide(wall28)
  enemy3.collide(wall29)
  enemy3.collide(wall30)
  enemy3.collide(wall31)
  enemy3.collide(wall32)
  enemy3.collide(wall33)
  enemy3.collide(wall34)
  enemy3.collide(wall35)
  enemy3.collide(wall36)
  enemy3.collide(wall37)
  enemy3.collide(wall38)
  enemy3.collide(wall39)
  enemy3.collide(wall40)
 enemy3.collide(wall41) 



 enemy4.collide(wall1)
  enemy4.collide(wall2)
  enemy4.collide(wall3)
  enemy4.collide(wall4)
  enemy4.collide(wall5)
  enemy4.collide(wall7)
  enemy4.collide(wall8)
  enemy4.collide(wall9)
  enemy4.collide(wall10)
  enemy4.collide(wall11)
  enemy4.collide(wall13)
  enemy4.collide(wall14)
  enemy4.collide(wall15)
  enemy4.collide(wall16)
  enemy4.collide(wall17)
  enemy4.collide(wall18)
  enemy4.collide(wall19)
  enemy4.collide(wall20)
  enemy4.collide(wall21)
  enemy4.collide(wall22)
  enemy4.collide(wall23)
  enemy4.collide(wall24)
  enemy4.collide(wall25)
  enemy4.collide(wall26)
  enemy4.collide(wall27)
  enemy4.collide(wall28)
  enemy4.collide(wall29)
  enemy4.collide(wall30)
  enemy4.collide(wall31)
  enemy4.collide(wall32)
  enemy4.collide(wall33)
  enemy4.collide(wall34)
  enemy4.collide(wall35)
  enemy4.collide(wall36)
  enemy4.collide(wall37)
  enemy4.collide(wall38)
  enemy4.collide(wall39)
  enemy4.collide(wall40)
 enemy4.collide(wall41) 

 enemy1.collide(wall1)
  enemy1.collide(wall2)
  enemy1.collide(wall3)
  enemy1.collide(wall4)
  enemy1.collide(wall5)
  enemy1.collide(wall7)
  enemy1.collide(wall8)
  enemy1.collide(wall9)
  enemy1.collide(wall10)
  enemy1.collide(wall11)
  enemy1.collide(wall13)
  enemy1.collide(wall14)
  enemy1.collide(wall15)
  enemy1.collide(wall16)
  enemy1.collide(wall17)
  enemy1.collide(wall18)
  enemy1.collide(wall19)
  enemy1.collide(wall20)
  enemy1.collide(wall21)
  enemy1.collide(wall22)
  enemy1.collide(wall23)
  enemy1.collide(wall24)
  enemy1.collide(wall25)
  enemy1.collide(wall26)
  enemy1.collide(wall27)
  enemy1.collide(wall28)
  enemy1.collide(wall29)
  enemy1.collide(wall30)
  enemy1.collide(wall31)
  enemy1.collide(wall32)
  enemy1.collide(wall33)
  enemy1.collide(wall34)
  enemy1.collide(wall35)
  enemy1.collide(wall36)
  enemy1.collide(wall37)
  enemy1.collide(wall38)
  enemy1.collide(wall39)
  enemy1.collide(wall40)
 enemy1.collide(wall41) 

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);
  player.collide(wall31);
  player.collide(wall32);
  player.collide(wall33);
  player.collide(wall34);
  player.collide(wall35);
  player.collide(wall36);
  player.collide(wall37);
  player.collide(wall38);
  player.collide(wall39);
  player.collide(wall40);
  player.collide(wall41);

}