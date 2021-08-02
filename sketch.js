var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var balls = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score = 0;
var gameState = "start";
var count = 0;
var ball;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height, width, 20);


   for (var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  fill("white");
  text("Score(s): " + score, 20, 30);
  text(" 500 ", 15, 550);
  text(" 500 ", 100, 550);
  text(" 500 ", 180, 550);
  text(" 500 ", 260, 550);
  text(" 100 ", 340, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 500, 550);
  text(" 200 ", 580, 550);
  text(" 200 ", 660, 550);
  text(" 200 ", 740, 550);
  fill("yellow");
  line(0, 580, 800, 580);
  Engine.update(engine);
  ground.display();

  if(gameState === "end"){
  fill("yellow");
  textSize(20);
  text("No More Particles!", 320, 450);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(ball != null){
   ball.display();
   if(ball.body.position.y > 760){
   if(ball.body.position.x < 300){
   //same as score = score + 500
   score += 500;
   ball = null;
   if(count >= 5)
   gameState = "end";
   }  
   else if(ball.body.position.x < 600 && ball.body.position.x > 301){
   score += 100;
   ball = null;
   if(count >= 5)
   gameState = "end";
   }
   else if(ball.body.position.x < 900 && ball.body.position.x > 601){
    score += 200;
    ball = null;
    if(count >= 5)
    gameState = "end";
    }
   }
   }

  //if(frameCount%60===0){
    //particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
    //score++;
  //}
 
  //for (var j = 0; j < particles.length; j++) {
     //particles[j].display();
  //}

   for (var k = 0; k < divisions.length; k++) { 
     divisions[k].display();
   }
}

function mousePressed(){
//!= is same as not equal to
if(gameState != "end"){
count++;
ball = new Ball(mouseX, 10, 10, 10);
}
}