function preload(){
}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    fill(0,128,0);
    stroke(0,128,0);
    circle(20,20,50);
    fill(0,128,0);
    stroke(0,128,0);
    circle(20,450,50);
    fill(0,128,0);
    stroke(0,128,0);
    circle(600,20,50);
    fill(0,128,0);
    stroke(0,128,0);
    circle(600,450,50);
    fill(255,0,0);
    stroke(255,0,0);
    rect(10,40,15,390);
    fill(255,0,0);
    stroke(255,0,0);
    rect(590,40,15,390);
    fill(255,0,0);
    stroke(255,0,0);
    rect(35,10,550,15);
    fill(255,0,0);
    stroke(255,0,0);
    rect(35,450,550,15);

}
function take_snapshot()
{
    save('jigyasha.png');
}
function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}