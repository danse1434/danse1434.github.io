import { muestreoReemplazo } from "./components/001_funcionesMuestreo.mjs?20210201";
import { arraySum, arrayMean } from "./components/004_funcionesVectores.mjs";

const matA = [
  [0.0, 0.4, 0.0, 0.0, 0.0, 0.6],
  [0.0, 0.0, 0.4, 0.0, 0.2, 0.4],
  [0.0, 0.0, 0.0, 0.8, 0.2, 0.0],
  [0.0, 0.0, 0.0, 0.0, 0.1, 0.9],
  [0.1, 0.0, 0.0, 0.0, 0.0, 0.9],
  [0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
];

var estadosNombres = ['Leer un libro', 'Hacer un projecto', 'Publicar', 'Obtener un aumento', 'Jugar un videojuego', 'Aburrirse'];
var estados = [0, 1, 2, 3, 4, 5];
var recompensas = [-3, -2, -1, 12, 1, 0];

let S = muestreoReemplazo(estados, matA[1], 1);
var arrayMuestreosR = [[], [], [], [], [], []];
var episodios = 5e2;
var i = 1;
var St = 0;

do {
  // Estado
  // console.log(`Iteración ${i} -> S ${St} -> R ${recompensas[St]}`);
  St = muestreoReemplazo(estados, matA[St], 1)[0];
  // Lista con muestreos de R
  arrayMuestreosR[St].push(recompensas[St]);

  if (St == 5) {
    St = 0;
  }
  i += 1;
  episodios -= 1;
} while (episodios > 0);

var arrayMuestreosMedia = arrayMuestreosR.map((d) => arrayMean(d));
var datos = [];

for (let i = 0; i < arrayMuestreosMedia.length; i++) {
  datos[i] = {estado: estadosNombres[i], recompensa: arrayMuestreosMedia[i]};
}

console.log(datos)

// Dimensiones
var margin = { top: 20, right: 20, bottom: 30, left: 60 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Rangos
var y = d3.scaleBand().range([height, 0]).padding(0.1);
var x = d3.scaleLinear().range([0, width]);

var svg = d3
  .select("#graficoMRP")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Scale the range of the data in the domains
x.domain([d3.min(datos, d => {return d.recompensa;}), d3.max(datos, d => {return d.recompensa;})]);
y.domain(datos.map(d => {return d.estado;})
);

svg
  .selectAll(".bar")
  .data(datos)
  .enter()
  .append("rect")
  .attr("class", "bar")
  //.attr("x", function(d) { return x(d.sales); })
  .attr("width", d => {return x(d.recompensa);})
  .attr("y", d => {return y(d.estado); })
  .attr("height", y.bandwidth());

// add the x Axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// add the y Axis
svg.append("g").call(d3.axisLeft(y));
