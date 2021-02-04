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

var estadosNombres = [
  "Leer un libro",
  "Hacer un projecto",
  "Publicar",
  "Obtener un aumento",
  "Jugar un videojuego",
  "Aburrirse",
];
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
  datos[i] = { estado: estadosNombres[i], recompensa: arrayMuestreosMedia[i] };
}

// console.log(datos);

// Dimensiones
var margin = { top: 20, right: 20, bottom: 30, left: 60 },
  width = 700 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#graficoMRP")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Rangos
var y = d3.scaleBand().range([height, 0]).padding(0.1);
var x = d3.scaleLinear().range([0, width]);

// Dominios
x.domain(d3.extent(datos, (d) => d.recompensa));
y.domain(datos.map((d) => d.estado));

svg
  .selectAll("rect")
  .data(datos)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("fill", (d) => d3.schemeSet1[d.recompensa > 0 ? 1 : 0])
  .attr("x", (d) => x(Math.min(d.recompensa, 0)))
  .attr("width", (d) => Math.abs(x(d.recompensa) - x(0)))
  .attr("y", (d) => y(d.estado))
  .attr("height", y.bandwidth());

svg
  .attr("font-family", "sans-serif") // .append("g")
  .attr("font-size", 10)
  .selectAll("text")
  .data(datos)
  .enter()
  .append("text")
  .attr("text-anchor", (d) => (d.recompensa < 0 ? "end" : "start"))
  .attr("x", (d) => x(d.recompensa) + Math.sign(d.recompensa - 0) * 4)
  .attr("y", (d, i) => y(d.estado) + y.bandwidth() / 2) // .attr("y", (d, i) => {y(i) + y.bandwidth() / 2})
  .attr("dy", "0.35em")
  .text((d) => d3.format(".1f")(d.recompensa));

// add the x Axis
svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// add the y Axis
svg.append("g").call((g) => {
  g.attr("transform", "translate(" + x(0) + ", " + 0 + ")")
    .call(
      d3.axisLeft(y).tickFormat((d, i) => datos[i].estado).tickSize(0).tickPadding(6))
    .call((g) => g.selectAll(".tick text")
        .filter((d, i) => datos[i].recompensa < 0)
        .attr("text-anchor", "start")
        .attr("x", 10)
    );
});

// var format = d3.format(metric === "absolute" ? "+,d" : "+,.0%");
