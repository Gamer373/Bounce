const BalX = [50, 150, 250, 350, 450];
const BalY = [50, 50, 50, 50, 50];
const SnelheidX = [2, -5, -10, 5, 2 ];
const SnelheidY = [5, -5, -10, -10, 10 ];

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

function draw() {
  // stel vulkleur in
  background('blue');

  //bal 1
  fill(200, 100, 255);
  ellipse(BalX[0],BalY[0],80,80);

  BalX[0] = BalX[0] + SnelheidX[0];
  BalY[0] = BalY[0] + SnelheidY[0];
  if(BalX[0] === 1240 || BalX[0] === 40){
    SnelheidX[0] = SnelheidX[0] * -1;
  }
  if(BalY[0] === 680 || BalY[0] === 40){
    SnelheidY[0] = SnelheidY[0] * -1;
  }

  //bal 2
  fill(200, 200, 0);
  ellipse(BalX[1],BalY[1],80,80);

  BalX[1] = BalX[1] + SnelheidX[1];
  BalY[1] = BalY[1] + SnelheidY[1];

  if(BalX[1] === 1240 || BalX[1] === 40){
    SnelheidX[1] = SnelheidX[1] * -1;
  }
  if(BalY[1] === 680 || BalY[1] === 40){
    SnelheidY[1] = SnelheidY[1] * -1;
  }

  //bal 3
  fill(200, 20, 200);
  ellipse(BalX[2],BalY[2],80,80);

  BalX[2] = BalX[2] + SnelheidX[2];
  BalY[2] = BalY[2] + SnelheidY[2];

  if(BalX[2] === 1240 || BalX[2] === 40){
    SnelheidX[2] = SnelheidX[2] * -1;
  }
  if(BalY[2] === 680 || BalY[2] === 40){
    SnelheidY[2] = SnelheidY[2] * -1;
  }

  //bal 4 
  fill(0, 255, 0);
  ellipse(BalX[3],BalY[3],80,80);

  BalX[3] = BalX[3] + SnelheidX[3];
  BalY[3] = BalY[3] + SnelheidY[3];

  if(BalX[3] === 1240 || BalX[3] === 40){
    SnelheidX[3] = SnelheidX[3] * -1;
  }
  if(BalY[3] === 680 || BalY[3] === 40){
    SnelheidY[3] = SnelheidY[3] * -1;
  }

  //bal 5
  fill(0, 200, 100);
  ellipse(BalX[4],BalY[4],80,80);

  BalX[4] = BalX[4] + SnelheidX[4];
  BalY[4] = BalY[4] + SnelheidY[4];

  if(BalX[4] === 1240 || BalX[4] === 40){
    SnelheidX[4] = SnelheidX[4] * -1;
  }
  if(BalY[4] === 680 || BalY[4] === 40 ){
    SnelheidY[4] = SnelheidY[4] * -1;
  }

}