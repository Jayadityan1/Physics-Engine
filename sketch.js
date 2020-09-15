 const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world, ground,ground_options,ball , ball_options;

function setup()
{
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
    var ground_options = { isStatic: true }
    var ball_options = {restitution:1.5}
    ground = Bodies.rectangle(200, 390, 400, 20, ground_options)
    ball = Bodies.circle(250, 290, 20, ball_options)
    World.add(world, ground);
    World.add(world, ball)

  //console.log(ground);
    //console.log(ground.position.y);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 390, 20);
    /ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 20)
}