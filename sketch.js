const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,dustbinImg;
var ball;
var ground;

function preload(){
  dustbinImg=loadImage("dustbin.png")
}
function setup() {
    createCanvas(1500, 800);
    engine = Engine.create();
    world = engine.world;
    ball = new PAPER(200,300,40,40);
    ground = new GROUND(100,height,3000,50)
    dustbin1 = new DUSTBIN (630,615,20,120)
   
    dustbin2 = new DUSTBIN (740,615, 20, 120)
    dustbin3 = new DUSTBIN (686, 690, 100, 20)
    Engine.run(engine);  
}

function draw() {
  background("white");
  imageMode(CENTER)
  image(dustbinImg,686,690,150,240)
    
    Engine.update(engine);

    ground.display();
    //dustbin1.display();
    //dustbin2.display();
    //dustbin3.display();
    ball.display();

}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-95});
    }
}
