noseX=0;
noseY=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/CMtyyjgD/184-1844463-free-moustache-transparent-curled-mustache-png.jpg')
}
function setup(){
    canvas=createCanvas(550,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 350);
     video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,550,350);
    image(clown_nose,noseX,noseY,60,40)
}
function snapshot(){
   save("img.png");
}
function modelloaded(){
    console.log("yaaaaaaaaaaay you got Hacked lol");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x-20;
    noseY=results[0].pose.nose.y+10;
}
}