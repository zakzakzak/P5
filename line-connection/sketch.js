var a=0;
var ball =[];

function setup() {
  createCanvas(600,400);
  ball[0]=
  {
  	x:100,
  	y:100,
  	display : function()
		{
			fill(0);
			ellipse(this.x,this.y,10,10);
		}
  }
}

function draw() {
    ball[0].display();
}

function mousePressed()
{
	a++;
	ball[a]=
	{
		x:random(0,600),
		y:random(0,400),
		display : function()
		{
			fill(0);
			ellipse(this.x,this.y,10,10);
		}
	}
	ball[a].display();
	for(var i=0;i<a;i++)
	{
		line(ball[a].x,ball[a].y,ball[i].x,ball[i].y);
	}
}