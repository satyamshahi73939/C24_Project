var ground, paper, trash_bin1, trash_bin2, trash_bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width-400,height-10,width,20);
    paper = new Paper(30, 600, 20);
    trash_bin1 = new Trash_Bin(700, 630, 150, 10);
    trash_bin2 = new Trash_Bin(630, 595, 10, 80);
    trash_bin3 = new Trash_Bin(770, 595, 10, 80);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  keyPressed();
  trash_bin1.display();
  trash_bin2.display();
  trash_bin3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    paper.display();
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-33});

  }
}