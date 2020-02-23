var cells = [];

function setup(){
  createCanvas(700,700);
  ellipse(34,43,10,10);
  for(var i = 0; i < 5; i++)
  cells.push(new Cell());
}

function draw(){
  background(21);
  for(var i = 0; i < cells.length; i++){
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed(){
  for(var i = cells.length-1; i >= 0; i--)
  {
    if(cells[i].clicked(mouseX,mouseY))
    {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
      break;
    }
  }
}
