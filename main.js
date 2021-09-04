function preload(){
    
}

lip_x=0;
lip_y=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}
function take_snapshot(){
 save('my_filter_img.png');
 
}
function draw(){
image(video,0,0,300,300);

}
function modelLoaded(){
    console.log('modelLoaded');
}
function gotPoses(result){
    if (result.length>0){
        console.log(result);
         lip_x= result[0].pose.lip.x;
         lip_y= result[0].pose.lip.y;
        console.log("lip x" + lip_x);
        console.log("lip y" + lip_y);
    }
}