export function generarMatriz(className, tagName) {
  let matEx = [];
  let matrix = document.getElementsByClassName(className);
  
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].tagName == tagName) {
      matEx.push(parseFloat(matrix[i].value));
    }
  }
  
  if ((matEx[0]+matEx[1]+matEx[2])!=1) {
    alert("La suma de las probabilidades de transición desde el estado Sano (primera fila) debe ser 1");
    console.log((matEx[0]+matEx[1]+matEx[2]));
  } else if((matEx[3]+matEx[4]+matEx[5])!=1){
    alert("La suma de las probabilidades de transición desde el estado Enfermo (segunda fila) debe ser 1");
    console.log((matEx[3]+matEx[4]+matEx[5]));
  } else {
    return(matEx);
  }
}