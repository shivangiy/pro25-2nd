
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var dustbin
var world;

function preload(){
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,690);
	paperObject=new paper(100,100,40);
	groundObject=new ground(width/2,690,width,20);
	dustbin=createSprite(1200,520)
	dustbin.addImage(dustbinimage)
	//Create a Ground
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  }

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  drawSprites()
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:115,y:-90});
    }}