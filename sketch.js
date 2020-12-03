var hr,mn,sc;
var hrangle,mnangle,scangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200,200);
  rotate(-90);

  //calculating time from predefined function from p5.js
  hr=hour();
  mn=minute();
  sc=second();

  //to create iterative rotation
  scangle=map(sc,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);

  //drawing seconds hand
  push();
  rotate(scangle);
  stroke("darkred");
  strokeWeight(8);
  line(0,0,100,0);
  pop();

  //drawing hour hand
  push();
  rotate(hrangle);
  stroke("lightgreen");
  strokeWeight(8);
  line(0,0,50,0);
  pop();

  //drawing minute hand
  push();
  rotate(mnangle);
  stroke("darkblue");
  strokeWeight(8);
  line(0,0,75,0);
  pop();

  stroke(255,0,255);
  point(0,0);

  //arc drawing
  strokeWeight(10);
  noFill();
  
  //seconds
  stroke("darkred");
  arc(0,0,300,300,0,scangle);

  //minutes
  stroke("darkblue");
  arc(0,0,275,275,0,mnangle);

  //hours
  stroke("lightgreen");
  arc(0,0,250,250,0,hrangle);

  drawSprites();
}

