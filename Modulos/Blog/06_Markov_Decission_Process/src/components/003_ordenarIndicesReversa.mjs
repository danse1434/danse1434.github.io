export {revsortwithIndices}
/**
 * Ordenar un arreglo en forma descendente y retornar el arreglo 
 * en forma ordenada, así como los índices del arreglo original 
 * ordenados.
 * 
 * @param {FloatArray} toSort arreglo a ordenar de forma 
 * descendente
 * @exports
 * 
 * @returns arreglo de números con la clave _sortIndices_ con 
 * los índices del arreglo original en la posición ordenada.
 */
function revsortwithIndices(toSort) {
  let toSort1 = [];
  for (let i = 0; i < toSort.length; i++) {
    toSort1[i] = [toSort[i], i];
  }
  toSort1.sort(function(left, right) {
    return left[0] > right[0] ? -1 : 1;
  });
  toSort1.sortIndices = [];
  for (let j = 0; j < toSort.length; j++) {
    toSort1.sortIndices.push(toSort1[j][1]);
    toSort1[j] = toSort1[j][0];
  }
  return toSort1;
}


/**
 * Testing 
 */
// let vectorOriginal1   = [0.797, 0.127, 0.727, 0.805, 0.490, 0.510, 0.230, 0.216, 0.866, 0.448];
// let vectorOrdenado1   = revsortwithIndices(vectorOriginal1);
// let posicionEsperada1 = [8, 3, 0, 2, 5, 4, 9, 6, 7, 1];

// let vectorComp1 = vectorOrdenado1.sortIndices.map( (d,i) => {return d === posicionEsperada1[i]});

// console.log("TEST 1: revsortwithIndices es capaz de ordenar de manera descendente a un vector dado otro vector");
// if (vectorComp1.reduce( (x,y) => {return x & y} ) === 1) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }

// let vectorOriginal2 = [4, 4, 7, 5, 6, 8, 8, 3, 4, 9];
// let vectorOrdenado2 = revsortwithIndices(vectorOriginal2);
// let posicionEsperada2 = [9, 5, 6, 2, 4, 3, 0, 1, 8, 7];
// let vectorComp2 = vectorOrdenado2.sortIndices.map( (d,i) => {return d === posicionEsperada2[i]});

// console.log("TEST 2: revsortwithIndices es capaz de ordenar de manera descendente a un vector dado otro vector (con repeticiones)");
// if (vectorComp2.reduce( (x,y) => {return x & y} ) === 1) {
//   console.log('OK');
// } else {
//   console.log('FAIL');
// }