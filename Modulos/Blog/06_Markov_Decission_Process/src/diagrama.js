import {multiplyMatrixAndPoint, convertRange, matA, matB, initVec} from './algebraLineal.js'
import {generarMatriz} from './generarMatriz.js'


var configButton =  document.getElementById("Configuracion")
var slider = document.getElementById("tiemposSimulacion");
var output = document.getElementById("tiempoSimulacionConfiguracion");
output.innerHTML = `<b>Escala de tiempo</b>: ${slider.value} Años`; // Display the default slider value

// Traer la configuración de la matriz
configButton.onclick = function(){
  let matEx = generarMatriz('cellMat', 'INPUT');
  // console.log(matEx);
  simulacion(slider.value, matEx);
}

// Actualizar el valor de slider
slider.oninput = function () {
  output.innerHTML = `<b>Escala de tiempo</b>: ${this.value} Años`;
  let matEx = generarMatriz('cellMat', 'INPUT');
  simulacion(this.value, matEx);
};

var margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 800 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom,
  padding = 20,
  barPadding = 1;

var svg = d3
  .select("#graficoProcesoMarkov")
  .append("svg")
  // .attr('width', width + margin.left + margin.right)
  // .attr('height', height + margin.top + margin.bottom)
  .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom,])
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xAxis = svg.append("g");
var yAxis = svg.append("g");

var path1 = svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 5);

var path2 = svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "green")
  .attr("stroke-width", 5);

var path3 = svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 5);

function simulacion(timeSteps, transitionMatrix) {
  
  let matVEC = [];
  let m = initVec;

  for (let i = 0; i < timeSteps; i++) {
    matVEC.push(m);
    m = multiplyMatrixAndPoint(transitionMatrix, m);
  }

  var x_scale = d3.scaleLinear()
    .domain([1, timeSteps])
    .range([padding, width - padding])
    .clamp(true);

  var y_scale = d3.scaleLinear()
    .domain([0, 1e7])
    .range([height - padding, padding])
    .clamp(true);
    
  xAxis.call(d3.axisLeft(y_scale))
    .attr("transform", "translate(" + 20 + ", " + 0 + ")");

  yAxis.call(d3.axisBottom(x_scale))
    .attr("transform", `translate( ${0}, ${height - 16} )`);

  path1.datum(matVEC)
    .attr("d", d3.line()
    .x((d, i) => {return x_scale(i + 1);})
    .y((d, i) => {return y_scale(d[0]);})
    );

  path2.datum(matVEC)
    .attr("d", d3.line()
    .x((d, i) => {return x_scale(i + 1);})
    .y((d, i) => {return y_scale(d[1]);})
    );

  path3.datum(matVEC)
    .attr("d", d3.line()
    .x((d, i) => {return x_scale(i + 1);})
    .y((d, i) => {return y_scale(d[2]);})
    );

  let legendObject = [
    {pos: 0, y: 0.20, xmin:0.7, xmax:0.8, color: 'steelblue', text: 'Sanos'},
    {pos: 1, y: 0.15, xmin:0.7, xmax:0.8, color: 'green', text: 'Enfermos'},
    {pos: 2, y: 0.10, xmin:0.7, xmax:0.8, color: 'red', text: 'Muertos'}
  ]
  for (let i = 0; i < legendObject.length; i++) {
    const element = legendObject[i];
    // console.log(element);

    svg.append('line')
      .attr('x1', (d,i) => {return x_scale( convertRange([0,1], [1, timeSteps+1 ], element['xmin'] ) )})
      .attr('x2', (d,i) => {return x_scale( convertRange([0,1], [1, timeSteps+1 ], element['xmax'] ) )})
      .attr('y1', (d,i) => {return y_scale( convertRange([0,1], [0, 1E7], element['y'] ))})
      .attr('y2', (d,i) => {return y_scale( convertRange([0,1], [0, 1E7], element['y'] ))})
      .attr('stroke', element['color']).attr('stroke-width', 5);

    svg.append('text')
      .attr('x', (d,i) => {return x_scale( convertRange([0,1], [1, timeSteps+1 ], element['xmax']+0.02 ) )} )
      .attr('y', (d,i) => {return y_scale( convertRange([0,1], [0, 1E7], element['y'] ))} )
      .text(element['text'])
      .attr('color', "black")
      .attr("font-family", "sans-serif")
      .style("font-size", "16px")
      .attr("alignment-baseline","middle");
  }
}

// console.log(convertRange([0,1], [0,30], 0.6));
// console.log(convertRange({'old_values': [0,1], 'new_values': [0,30], 'value': 0.6}));

simulacion(30, matA);


