import { revsortwithIndices } from "./003_ordenarIndicesReversa.mjs?20210203";
export { muestreoReemplazo };

/**
 * Muestrear con reemplazo un vector de acuerdo a probabilidades
 * definidas para cada elemento.
 *
 * @param {Int32Array} array vector de estados posibles
 * @param {Float64Array} probs probabilidad de transición al estado
 * @param {Number} n número de muestras a tomar
 *
 * @exports
 * @returns
 * @example
 */
function muestreoReemplazo(array, probs, n) {
  let rU;
  var ans = [];

  // 1. Ordenar las prob. de manera inversa
  let revProb = revsortwithIndices(probs);
  // 2. Seleccionar los estados de acuerdo al índice
  let estadosOrdenados = revProb.sortIndices.map((i) => array[i]);
  // 3. Calcular las probabilidades reversas de forma acumulada
  for (let k = 1; k < revProb.length; k++) {
    revProb[k] += revProb[k - 1];
  }
  // 4. Realizar muestreos
  for (var i = 0; i < n; i++) {
    rU = Math.random();
    for (var j = 0; j < revProb.length - 1; j++) {
      if (rU <= revProb[j]) {
        ans[i] = estadosOrdenados[j];
        break;
      }
    }
  }
  return (ans);
}

/**
 * Testing 
 */
// console.log("TEST 1: la función muestrea el elemento más probable");

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let proba1 = [0, 0, 0, 0, 0, 0, 0, 1, 0];
// let muest1 = muestreoReemplazo(array1, proba1, 1000);
// let compr1 = muest1.map( d => {return d===8});

// if (compr1.reduce((x,y) => {return x&y}) === 1) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }

// console.log("TEST 2: la función no muestrea ningún elemento si las probabilidades son cero");

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let proba2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// let muest2 = muestreoReemplazo(array2, proba2, 1000000);

// if (muest2.length === 0) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }

// console.log("TEST 3: la función muestrea elementos con probabilidad mayor a cero");
// let Nvars = 1e6;
// let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let proba3 = [0, 0, 0.1, 0, 0.1, 0.2, 0, 0.6, 0];
// let muest3 = muestreoReemplazo(array3, proba3, Nvars);
// var uniqu3 = muest3.filter((v, i, a) => a.indexOf(v) === i);

// let refun3 = [3, 5, 6, 8];
// let compr3 = uniqu3.sort().map( (d,i) => d === refun3[i]);

// if (compr3.reduce( (x,y) => {return x&y}) === 1) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }

// console.log("TEST 4: la función muestrea de acuerdo a la probabilidad definida");

// var counts3 = {};

// for (var i = 0; i < muest3.length; i++) {
//   var num = muest3[i];
//   counts3[num] = counts3[num] ? counts3[num] + 1 : 1;
// }

// let compr4 = Object.values(counts3).map(d => {return Math.round(d/Nvars*10)/10});
// compr4 = [0.1, 0.1, 0.2, 0.6].map( (d, i) => d === compr4[i]);

// if (compr4.reduce( (x,y) => {return x&y}) === 1) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }