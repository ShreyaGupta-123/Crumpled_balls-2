
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbin2,dustbin3,dustbinIMG,dust;
var ground;
var ball;

function preload()
{
	dust=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinIMG=createSprite(700,550,10,10);
	dustbinIMG.addImage(dust);
	dustbinIMG.scale=0.9


	Engine.run(engine);
	dustbin=new Dustbin(700,670,200,30);
	dustbin2=new Dustbin(600,635,30,450);
	dustbin3=new Dustbin(800,635,30,450);
	ball=new Ball(100,30,70); 
	ground=new Ground(450,690,900,20);
}


function draw() {
  rectMode(CENTER);
  background(255);
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  ball.display(); 
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:900,y:-900});

	}
}



