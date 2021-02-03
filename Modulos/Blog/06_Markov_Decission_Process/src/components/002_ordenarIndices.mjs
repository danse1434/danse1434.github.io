export {sortwithIndices}

/**
 * Ordenar un arreglo en forma ascendente y retornar el arreglo 
 * en forma ordenada, así como los índices del arreglo original 
 * ordenados.
 * 
 * @param {FloatArray} toSort 
 * 
 * @exports
 * @returns arreglo de números con la clave _sortIndices_ con 
 * los índices del arreglo original en la posición ordenada.
 */
function sortwithIndices(toSort) {
  for (let i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (let j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}