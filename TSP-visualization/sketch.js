var cities = [];
var totalCities = 10;
var jalur;
var c;

var recordDistance;

function setup() {
  var k = createCanvas(400, 300);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDistance = d;
  print(recordDistance);
  jalur = cities.slice();

}

function draw() {
  background(0);
  fill(255);
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 4, 4);
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    print(recordDistance);
    jalur = cities.slice();
    saveFrames('out', 'png', 1, 25, function(data) {
      print(data);
    });
  }

  // terbaoks
  stroke(100, 10, 200);
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < jalur.length; i++) {
    vertex(jalur[i].x, jalur[i].y);
  }
  endShape();

}

function swap(a, i, j) {
  var tmp = a[j];
  a[j] = a[i];
  a[i] = tmp;
}

function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
