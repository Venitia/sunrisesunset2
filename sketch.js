const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg = "sunrise1.png";
var bgImage;


function preload() {
    // create getBackgroundImg( ) here
    getBgImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     
    // add condition to check if any background image is there to add
    
    if(bgImage)
    background(bgImage);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){
        text("time"+hour%12+"pm",50,100)
    }
    else if (hour=== 0){

    }

}

async function getBgImage(){

 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responseJSON = await response.json();
 var datetime = responseJSON.datetime
 var hour = datetime.slice(11,13);  
 console.log(hour);

 if(hour>=04 && hour<=06){
    bg = "sunrise2.png";
}

else if(hour>=06 && hour<=08){
    bg = "sunrise3.png";
}
else if(hour>=08 && hour<=12){
    bg = "sunrise4.png";
}
else if(hour>=12 && hour<=15){
    bg = "sunrise5.png";
}
else if(hour>=15 && hour<=17){
    bg = "sunset7.png";
}
else if(hour>=17 && hour<=18){
    bg = "sunset10.png";
}
else if(hour>=18 && hour<=20){
    bg = "sunset11.png";
}
else {
    bg = "sunset12.png";
}

bgImage = loadImage(bg);

}
