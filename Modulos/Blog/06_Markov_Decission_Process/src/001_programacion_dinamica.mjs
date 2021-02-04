import { muestreoReemplazo } from "./components/001_funcionesMuestreo.mjs?20210201";
import { arraySum, arrayMean } from "./components/004_funcionesVectores.mjs";
import { evaluacionPoliticaIterativa } from "./components/005_evaluacionPoliticaIterativa_1.mjs?20210201";
import {actualizarGrafico} from "./components/006_actualizarGraficoBarras.mjs?20210203"

var configButton = document.getElementById("Configuracion");
var tasaDescuentoSlider = document.getElementById("tasaDescuento");
var output = document.getElementById("tasaDescuentoConfiguracion");
output.innerHTML = `<b>Tasa de Descuento</b>: ${tasaDescuentoSlider.value}`; 

tasaDescuentoSlider.oninput = function () {
  var descuento1 = this.value;
  output.innerHTML = `<b>Tasa de Descuento</b>: ${this.value}`;
  var dataFrame1 = actualizarDP(descuento1);
  actualizarGrafico(dataFrame1, svg, margin, width, height, x, y);
  // console.log(dataFrame1);
};

const matA = [
  [0.0, 0.4, 0.0, 0.0, 0.0, 0.6],
  [0.0, 0.0, 0.4, 0.0, 0.2, 0.4],
  [0.0, 0.0, 0.0, 0.8, 0.2, 0.0],
  [0.0, 0.0, 0.0, 0.0, 0.1, 0.9],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.9],
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
];

var estadosNombres = ["Leer un libro","Hacer un projecto","Publicar","Obtener un aumento","Jugar un videojuego","Aburrirse"];
var recompensas = [-3, -2, -1, 12, 1, 0];


function actualizarDP(descuento) {
  let funcionesValor = evaluacionPoliticaIterativa(estadosNombres,recompensas,matA,descuento);
  let dataFrame = [];
  for (let i = 0; i < estadosNombres.length; i++) {
    dataFrame[i] = {
      estado: estadosNombres[i],
      recompensa: recompensas[i],
      retorno: funcionesValor.map((d) => Math.round(d * 100) / 100)[i],
    };
  }
  return dataFrame;
}

// Crear gráfico

// Dimensiones
var margin = { top: 20, right: 20, bottom: 30, left: 60 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#graficoMRP")
  .append("svg")
  .attr('viewBox', [0, 0, width+ margin.left + margin.right, height + margin.top + margin.bottom])
  // .attr("width", width + margin.left + margin.right)
  // .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Rangos
var y = d3.scaleBand().range([height, 0]).padding(0.1);
var x = d3.scaleLinear().range([0, width]);


// Barras
// Las barras no se pueden colocar nuevamente
actualizarGrafico(actualizarDP(tasaDescuentoSlider.value), svg, margin, width, height, x, y);
