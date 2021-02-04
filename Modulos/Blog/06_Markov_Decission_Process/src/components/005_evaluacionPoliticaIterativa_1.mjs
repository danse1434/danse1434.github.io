import { arraySum, arrayMean } from "./004_funcionesVectores.mjs";
export {evaluacionPoliticaIterativa};

/**
 * Adaptación de algoritmo de evaluación de política iterativa para proceso 
 * de recompensa de Markov
 * 
 * @param estados vector de estados posibles
 * @param recompensas array con recompensas determinísticas para cada estado
 * @param matrizProbabilidad matriz de probabilidad de transición entre estados
 * @param gamma factor de descuentos
 * @param umbral umbral de iteración
 */
function evaluacionPoliticaIterativa(estados, recompensas, matrizProbabilidad, gamma, umbral=1e-5) {
  let funcionesValor = [];
  for (let m = 0; m < estados.length; m++) funcionesValor[m] = 1;
  
  do {
    var delta = 0;
    
    for (let i = 0; i < estados.length; i++) {
      let v = funcionesValor[i];

      let resultado = matrizProbabilidad[i].map( (d,j) => d * (recompensas[i] + gamma * funcionesValor[j]) );
      
      funcionesValor[i] = arraySum(resultado);
      
      delta = Math.max(delta, Math.abs(v - funcionesValor[i]));
      
    }
  } while (delta >= umbral);

  return funcionesValor;
}
