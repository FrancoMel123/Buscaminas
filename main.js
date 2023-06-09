//Constantes del juego
const COLUMNAS = 5;
const FILAS = 5;
const CANTIDAD_MINAS = 3;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();
  
  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");
  
  // Modificar/completar
  casillerosSinDescubrir = COLUMNAS * FILAS;
  for(let i = 0; i<CANTIDAD_MINAS; i++){
    ponerMinasTablero();
  }

}


function draw() {
  if (hizoClick == true){

    if(mouseButton == LEFT){
    
    if (tieneMinaCasillero(columnaPresionada,filaPresionada)){
      mostrarMinas();
      perder();
    }
    else{
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
      descubrirCasillero(columnaPresionada,filaPresionada);
    }
    
  }
    if (mouseButton == RIGHT){
     pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
    if (ganoElJuego() == true){
      ganar();
    }
  }
  hizoClick=false;
}

function ganoElJuego()
{
  if(casillerosSinDescubrir == CANTIDAD_MINAS){
    return true;
  }
  else{
    return false;
  }
}

function ponerMinasTablero()
{
  // Modificar/completar
  let numeroRandomCol = floor(random()*COLUMNAS);
  let numeroRandomFil = floor(random()*FILAS);
  ponerMinaCasillero(numeroRandomCol,numeroRandomFil);
  console.log(numeroRandomCol);

}

function mostrarMinas()
{
  // Modificar/completar
  for(let k = 0; k<COLUMNAS;k++){

    for(let j =0; j<FILAS; j++){

      if(tieneMinaCasillero(k ,j)){ 
        pintarCasillero(k,j, COLOR_CASILLERO_CON_MINA)
      }
        
    }
  }
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}