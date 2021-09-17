img = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
    img = loadImage('laptop.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#00FF00");
    text("Laptop", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(20, 30, 550, 450);
}