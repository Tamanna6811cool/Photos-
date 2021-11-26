 function preload(){

 }
 function setup(){
     canvas=createCanvas(640,480);
     canvas.position(110,250);
     video=createCapture(VIDEO);
     video.hide();
     tint_color="";
 }
 function draw(){
    circle(30, 30, 20);  
 }
 function take_snapshot(){
     save("name.png");
 }
