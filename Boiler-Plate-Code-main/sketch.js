var ground, groundImg;
var zombie, zombieImg;
var edges;
var obstacle, obstacleImg;
var obstacleGroup, invisibleGround;

function preload (){
    groundImg = loadImage("ground.png");
    zombieImg = loadAnimation("zombie0.png","zombie1.png","zombie2.png","zombie3.png","zombie4.png",
    "zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png");
    obstacleImg = loadAnimation("Images/devil0.png","Images/devil1.png","Images/devil2.png","Images/devil3.png",
    "Images/devil4.png","Images/devil5.png","Images/devil6.png","Images/devil7.png",);
}

function setup(){
    createCanvas(800, 600);
    ground = createSprite(400,300,800,600);
    ground.addImage(groundImg);
    ground.velocityX = -6;

    zombie = createSprite(150,450,50,50);
    zombie.addAnimation("running",zombieImg);
    zombie.scale = 0.8;
    zombie.debug = false;
    zombie.setCollider("rectangle",0,0,50,250);
    
    invisibleGround = createSprite(100, 550, 800,20);
    invisibleGround.visible = false;


    edges = createEdgeSprites();
    obstacleGroup = new Group();

}

function draw(){
    background(0);
    if (ground<0){
        ground.x = ground.width/2;
    }
    if (keyDown("right")){
        zombie.x = zombie.x+1
    }
    if (keyDown("left")){
        zombie.x = zombie.x-1
    } 
    if (keyDown("space")){
        zombie.velocityY = -12;
    }
    zombie.velocityY = zombie.velocityY+0.5;

    zombie.collide(edges);
    zombie.collide(invisibleGround);
    spawnObstacle();

    drawSprites();

}

function spawnObstacle(){
if (frameCount % 180===0){
    obstacle = createSprite(800, 460, 10, 10);
    obstacle.addAnimation("walking",obstacleImg);
    obstacle.velocityX = -4;
    obstacle.scale = 0.8;
    obstacle.lifetime = 850;
    obstacleGroup.add(obstacle);
}


}