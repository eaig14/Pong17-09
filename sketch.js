//Variaveis bolinha 
let xBolinha =250;
let yBolinha =100;
let diametro =30;


let velocidadexBolinha =6;
let velocidadeyBolinha =6; 

// variaveis minharaquete
let xRaqueteJogador =5;
let yRaqueteJogador =15;
let alturaRaqueteJogador =20;
let larguraRaqueteJogador =100;

//variaveis raquete oponente 
let xRaqueteOponente =385;
let yRaqueteOponente =15;
let alturaRaqueteOponente =20;
let larguraRaqueteOponente =100;

let velocidadeyOponente



//colisao
let colidiu = false


let posicaoHorizontal; //x
let posicaoVertical; //y

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoRaqueteJogador();
  mostraRaqueteJogador();
  mostraRaqueteOponente();
  movimentaRaqueteJogador();
  movimentaRaqueteOponente();
}

function mostraBolinha(){
  fill("#C03FD6");
  circle(xBolinha, yBolinha, diametro); 
}

function movimentaBolinha() {
  xBolinha+= velocidadexBolinha;
  yBolinha+= velocidadeyBolinha;
  
  }

function verificaColisao() {
  if(xBolinha> width||xBolinha<0){
    velocidadexBolinha *= -1;
  }
  if(yBolinha> height||yBolinha<0){
    velocidadeyBolinha *= -1
  }}
  

  
function mostraRaqueteJogador(){
  fill('blue');
  stroke('#F31B64')
  rect(xRaqueteJogador,yRaqueteJogador,alturaRaqueteJogador,larguraRaqueteJogador );
 
}

  function movimentaRaqueteJogador(){
    if(keyIsDown(UP_ARROW)){
      yRaqueteJogador -=10;
  }
    
    if(keyIsDown(DOWN_ARROW)){
      yRaqueteJogador +=10;
    }
  }

function verificaColisaoRaqueteJogador(){
  colidiu = collideRectCircle(
  xRaqueteJogador,
 yRaqueteJogador,
 alturaRaqueteJogador,
 larguraRaqueteJogador, 
  xBolinha, 
   yBolinha, 
  diametro /2);
  if(colidiu==true){
    velocidadexBolinha *= -1;
  }
  
}
function mostraRaqueteOponente(){
  fill('blue');
  stroke('#F31B64')
  rect(xRaqueteOponente,yRaqueteOponente,alturaRaqueteOponente,larguraRaqueteOponente );
 
}

function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - alturaRaqueteOponente /2 - 30;
  yRaqueteOponente += velocidadeyOponente
  
}

function verificaColisaoRaqueteOponente(){
  colidiu = collideRectCircle(
  xRaqueteOponente,
 yRaqueteOponente,
 alturaRaqueteOponente,
 larguraRaqueteOponente, 
  xBolinha, 
   yBolinha, 
  diametro /2);
  if(colidiu==true){
    velocidadexBolinha *= -1;
  }
}

