var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//ball
	ball = new Ball(100,200);
	
	//ground
	ground = new Ground(width/2, 670, 800, 20 );

	//box
	box1 = new Box(650,670,200,15);
    box2 = new Box(557,575,20,190);
	box3 = new Box(743,575,20,190);

	Engine.run(engine);
}


function draw() {

	background("grey");

	text("x"+mouseX+"y"+mouseY,mouseX,mouseY)
	console.log(mouseX,mouseY)

	Engine.update(engine);
	
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	ball.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:23,y:-23});
	}
}
