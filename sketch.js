var bg;
var snowgirl;
var snow=[];

function preload()
{
  girlImg = loadAnimation("snowgirl1.png");
}

function setup() {
  bg = loadImage("snow1.jpg")
  bg1 = loadImage("snow2.jpg")
  //snowgirl = createSprite(600,300,2,5)
  
  snowgirl = createSprite(600,300,2,5);
	snowgirl.addAnimation("snowgirl1.png",girlImg);  
	snowgirl.scale =0.25;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  //console.log(sprite.x)
}

function draw() {
  background(bg1);
  textSize(35)
        fill("white")
        text("Press Space to move to the next slide",100,50)
          
  
  snowgirl.display()
}



function keyPressed(){
if(keyCode===39 ){
  snowgirl.x = snowgirl.x+12
}
if(keyCode === 32 ){
  background(bg);
     
 }
 background(bg)

 if(keyCode === 37){
   snowgirl.x = snowgirl.x-12
 }

 if(frameCount%60===0){
  snow.push(new Snow(random(width/2-10,width/2+10),10,10)) ;
}
for(var h = 0;h<snow.length;h++){
  snow[h].display();
}

}

 






