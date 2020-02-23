var z=0;
var poin = {
   x : 100,
   y : 50
};

var col = {
   r : 255,
   g : 0, 
   b : 0
};

function setup() {
  createCanvas(5000,600);
  background(0);
}

function draw() {
  // background(0);
  col.r = 0;
  col.g = random(0,255);
  z = random(10,50);
  col.b = random(100,255);
  poin.x = random(0,width);
  poin.y = random(0,height);
  fill(col.r,col.g,col.b,random(30,100));
  ellipse(poin.x,poin.y,z,z);
  noStroke();

}