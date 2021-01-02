const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

    box1 = new Box(240,100,80,100);
    box2= new Box(200,250,60,100);
    box3 = new Box(280,150,70,100);
    box4= new Box(100,250,50,100);
    ground=new Ground(200,390,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   ground.display();
}