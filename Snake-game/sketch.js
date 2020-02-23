var x=300;
var y=300;
var makanan=false;
var c;
var d;
var score=0;
var tiam=0;



function setup() {
  createCanvas(600,400);
 
}

function draw() {
	background(255,3);
	if(makanan==false)
	{
		var a=random(0,600);
		var b=random(0,400);
		fill(0,random(200||0),200);
		rect(a,b,10,10);
		c=a;
		d=b;
		makanan=true;
		

	}
  fill(0,200,200);
  rect(c,d,10,10);
  noFill();
  rectMode(CENTER);
  rect(x,y,30,30);
  if(c<x)
  {
  	x=x-5;
  }
  
  if(c>x)
  {
  	x=x+5;
  }
  if(d<y)
  {
  	y=y-5;
  }
  if(d>y)
  {
  	y=y+5;
  }
  if(c<x&&d<y)
  {
  	x=x-5;
  	y=y-5;
  }
  

  if((c<15+x && c>x-15) && (d<y+15 && d>y-15))
  {
   	makanan=false;	
  	   score++;
  	//   print("SCORE : "+ score);
  }
  
  print("waktu"+tiam);
  tiam++;
  
}