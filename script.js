
var Bal1X = 50;
var Bal1Y = 50;
var Bal2X = 150;
var Bal2Y = 50;
var Bal3X = 250;
var Bal3Y = 50;
var Bal4X = 350;
var Bal4Y = 50;
var Bal5X = 450;
var Bal5Y = 50;
var SnelheidX1 = 2;
var SnelheidY1 = 5;
var SnelheidX2 = -5;
var SnelheidY2 = -5;
var SnelheidX3 = -10;
var SnelheidY3 = -10;
var SnelheidX4 = 5;
var SnelheidY4 = -10;
var SnelheidX5 = 10;
var SnelheidY5 = 10;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  background('blue');
  //bal 1
  fill(200, 100, 255);
  ellipse(Bal1X,Bal1Y,80,80);

  Bal1X = Bal1X + SnelheidX1;
  Bal1Y = Bal1Y + SnelheidY1;
  
  if(Bal1X === 1240){
    SnelheidX1 = SnelheidX1 * -1;
  }
  if(Bal1X === 40){
    SnelheidX1 = SnelheidX1 * -1;
  }

  if(Bal1Y === 680){
    SnelheidY1 = SnelheidY1 * -1;
  }

  if(Bal1Y === 40){
    SnelheidY1 = SnelheidY1 * -1;
  }

  //bal 2
  fill(200, 200, 0);
  ellipse(Bal2X,Bal2Y,80,80);

  Bal2X = Bal2X + SnelheidX2;
  Bal2Y = Bal2Y + SnelheidY2;

  if(Bal2X === 1240){
    SnelheidX2 = SnelheidX2 * -1;
  }
  if(Bal2X === 40){
    SnelheidX2 = SnelheidX2 * -1;
  }

  if(Bal2Y === 680){
    SnelheidY2 = SnelheidY2 * -1;
  }

  if(Bal2Y === 40){
    SnelheidY2 = SnelheidY2 * -1;
  }

  //bal 3
  fill(200, 20, 200);
  ellipse(Bal3X,Bal3Y,80,80);

  Bal3X = Bal3X + SnelheidX3;
  Bal3Y = Bal3Y + SnelheidY3;

  if(Bal3X === 1240){
    SnelheidX3 = SnelheidX3 * -1;
  }
  if(Bal3X === 40){
    SnelheidX3 = SnelheidX3 * -1;
  }

  if(Bal3Y === 680){
    SnelheidY3 = SnelheidY3 * -1;
  }

  if(Bal3Y === 40){
    SnelheidY3 = SnelheidY3 * -1;
  }

  //bal 4 
  fill(0, 255, 0);
  ellipse(Bal4X,Bal4Y,80,80);

  Bal4X = Bal4X + SnelheidX4;
  Bal4Y = Bal4Y + SnelheidY4;

  if(Bal4X === 1240){
    SnelheidX4 = SnelheidX4 * -1;
  }
  if(Bal4X === 40){
    SnelheidX4 = SnelheidX4 * -1;
  }

  if(Bal4Y === 680){
    SnelheidY4 = SnelheidY4 * -1;
  }

  if(Bal4Y === 40){
    SnelheidY4 = SnelheidY4 * -1;
  }

  //bal 5
  fill(0, 200, 100);
  ellipse(Bal5X,Bal5Y,80,80);

  Bal5X = Bal5X + SnelheidX5;
  Bal5Y = Bal5Y + SnelheidY5;

  if(Bal5X === 1240){
    SnelheidX5 = SnelheidX5 * -1;
  }
  if(Bal5X === 40){
    SnelheidX5 = SnelheidX5 * -1;
  }

  if(Bal5Y === 680){
    SnelheidY5 = SnelheidY5 * -1;
  }

  if(Bal5Y === 40){
    SnelheidY5 = SnelheidY5 * -1;
  }
}