
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var world,engine,boy;
var launchingForce=100;
function preload()
{boy=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone=new Stone(235,420,30);
 mango1=new Mango(1100,100,30);
 mango2=new Mango(1170,130,30);
 mango3=new Mango(1100,140,30);
 mango4=new Mango(1000,70,30);
 mango5=new Mango(1100,70,30);
 mango6=new Mango(1000,230,30);
 mango7=new Mango(900,230,40);
 mango8=new Mango(1140,150,40);
 mango9=new Mango(1100,230,40);
 mango10=new Mango(1200,200,40);
 mango11=new Mango(1120,50,40);
 mango12=new Mango(900,160,40);
 tree=new Tree(1050,580);
 ground=new Ground(width/2,600,width,20);
 launcher=new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,340,200,300);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  tree.display();
  ground.display();
  launcher.display();
  
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);
 detectCollision(stone,mango11);
 detectCollision(stone,mango12);

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher.fly();
}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcher.attach(stone.body);
	}
}
function detectCollision(stone,mango){
	mangoPosition=mango.body.position;
	stonePosition=stone.body.position;
	var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
	if(distance<stone.r+mango.r){
		Matter.Body.setStatic(mango.body,false);
	}
}