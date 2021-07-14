var canvas;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var music;
var music2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var ball;
var edges;
var score=4;
var flag=0;
function preload(){
    music = loadSound("black.mp3");
    music2=loadSound("white.mp3");
   // b1=loadImage("bg2.gif")
   // b2=loadImage("download.png")

}


function setup(){
    canvas = createCanvas(1500,700);

    //create 4 different surfaces
 box1=createSprite(70,600,150,50);
 box1.shapeColor="black";
 box2=createSprite(270,650,150,50)
 box2.shapeColor="white";
box3=createSprite(470,600,150,50)
box3.shapeColor="black";
box4=createSprite(670,650,150,50)
box4.shapeColor="white";
box5=createSprite(870,600,150,50)
box5.shapeColor="black";
box6=createSprite(1070,650,150,50)
box6.shapeColor="white";
box7=createSprite(1270,600,150,50)
box7.shapeColor="black";
box8=createSprite(1450,650,150,50)
box8.shapeColor="white";


    //create box sprite and give velocity

    ball=createSprite(100,50,55,55,50)
   ball.shapeColor="green";
   ball.velocityX=4;
   ball.velocityY=7;

  // bg=createSprite(800,200);
  // bg.addImage()

}

function draw() {
    if(flag==0){
        background("darkblue");
    }
   
   
   
    //create edgeSprite
   edges= createEdgeSprites();
    ball.bounceOff(edges);


    if(box1.isTouching(ball)&&ball.bounceOff(box1)){
        score=score/2;
        ball.scale=0.5
        music.play();
        ball.shapeColor="red"    
        // ball.destroy()
        //ball=createSprite(100,200,20)
flag=1
    }

    if(box2.isTouching(ball)&&ball.bounceOff(box2)){
        score=score*2;
        ball.scale+=0.1
        music2.play();
        ball.shapeColor=rgb(80,36,140); 
flag=2
    }

    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        score=score/2;
        ball.scale=0.5
        music.play();
        ball.shapeColor=rgb(3,252,44);     
        background(200,45,15)
        flag=3
    }

    if(box4.isTouching(ball)&&ball.bounceOff(box4)){
        score=score*2;
        ball.scale+=0.1
        music2.play();
        ball.shapeColor=rgb(177,3,252);  
        flag=4  
    }

    if(box5.isTouching(ball)&&ball.bounceOff(box5)){
        score=score/2;
        ball.scale=0.5
        music.play();
        ball.shapeColor=rgb(252,3,111);
        flag=5

    }

    if(box6.isTouching(ball)&&ball.bounceOff(box6)){
        score=score*2;
        ball.scale=+0.1
        music2.play();
        ball.shapeColor=rgb(252,127,3);
        flag=6

    }

    if(box7.isTouching(ball)&&ball.bounceOff(box7)){
        score=score/2;
        ball.scale=0.5
        music.play();
        ball.shapeColor=rgb(3,252,144); 
        flag=7
    }

    if(box8.isTouching(ball)&&ball.bounceOff(box8)){
        score=score*2;
        ball.scale=+0.1
        music2.play();
        ball.shapeColor=rgb(77,2,4);
        flag=8
    }

if(flag==1)
{
   
    

    ellipse(ball.x,ball.y,20,20)

   
}

if(flag==2)
{
   
   

    ellipse(ball.x,ball.y,50,50)

  
}

if(flag==3)
{
  


    ellipse(ball.x,ball.y,100,100)
    
}

if(flag==4)
{
  
    

    ellipse(ball.x,ball.y,150,150)
    
}

if(flag==5)
{
   

    ellipse(ball.x,ball.y,200,200)
    
}

if(flag==6)
{
  
    ellipse(ball.x,ball.y,20,20)
    
}

if(flag==7)
{
  
    

    ellipse(ball.x,ball.y,100,100)
    // 
}

if(flag==8)
{    
   
    

    ellipse(ball.x,ball.y,60,60)
    
  
}

    drawSprites();
    ("yellow");
   textSize(60)
   text("score = "+score,100,50)
}
