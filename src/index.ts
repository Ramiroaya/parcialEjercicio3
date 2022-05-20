let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let arregloA: number[] = new Array();
let arregloB: number[] = new Array();
let arregloConcatenado: number[] = new Array();
let indice: number = 0;
let tamaño: number = 0;

//La siguiente Funcion carga el arreglo de numeros enteros.
function cargarArreglo(arreglo: number[], tamaño: number) {
  for (indice = 0; indice < tamaño; indice++) {
    arreglo[indice] = Number(
      prompt("Ingrese el numero del arreglo en la posicion  " + (indice + 1))
    );
  }
  alert("Ud.termino de cargar el arreglo");
}

function concatenarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  arregloConcatenado: number[]
) {
  arregloConcatenado[arreglo1.length + arreglo2.length];
  for (indice = 0; indice < arreglo1.length; indice++) {
    arregloConcatenado[indice * 2] = arreglo1[indice];
    arregloConcatenado[indice * 2 + 1] = arreglo2[indice];
  }
}
rotulo1.innerHTML = "Ingrese el tamaño del arreglo";

btnEnviar1.addEventListener("click", () => {
  tamaño = Number(dato1.value);
});

btnEnviar2.addEventListener("click", () => {
  cargarArreglo(arregloA, tamaño);
});

btnEnviar3.addEventListener("click", () => {
  cargarArreglo(arregloB, tamaño);
});
btnEnviar4.addEventListener("click", () => {
  concatenarArreglos(arregloA, arregloB, arregloConcatenado);
  rotulo2.innerHTML = "" + arregloConcatenado;
});
