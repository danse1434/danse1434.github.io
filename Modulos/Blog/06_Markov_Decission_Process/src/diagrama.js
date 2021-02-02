function generarMatriz() {
  let matEx = [];
  let matrix = document.getElementsByClassName("cellMat");
  
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].tagName == "INPUT") {
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

var configButton =  document.getElementById("Configuracion")
var slider = document.getElementById("tiemposSimulacion");
var output = document.getElementById("tiempoSimulacionConfiguracion");
output.innerHTML = `<b>Escala de tiempo</b>: ${slider.value} Años`; // Display the default slider value

// Traer la configuración de la matriz
configButton.onclick = function(){
  let matEx = generarMatriz();
  console.log(matEx);
  simulacion(slider.value, matEx);
}

// Actualizar el valor de slider
slider.oninput = function () {
  output.innerHTML = `<b>Escala de tiempo</b>: ${this.value} Años`;
  let matEx = generarMatriz();
  simulacion(this.value, matEx);
};

let matA = [0.6, 0.2, 0.2, 0.0, 0.6, 0.4, 0.0, 0.0, 1.0];
let matB = [0.4, 0.3, 0.3, 0.0, 0.6, 0.4, 0.0, 0.0, 1.0];
let initVec = [1e7, 0, 0];

function multiplyMatrixAndPoint(matrix, point) {
  // Give a simple variable name to each part of the matrix, a column and row number
  let c0r0 = matrix[0], c1r0 = matrix[1], c2r0 = matrix[2];
  let c0r1 = matrix[3], c1r1 = matrix[4], c2r1 = matrix[5];
  let c0r2 = matrix[6], c1r2 = matrix[7], c2r2 = matrix[8];

  // Now set some simple names for the point
  let x = point[0];
  let y = point[1];
  let z = point[2];

  // Multiply the point against each part of the 1st column, then add together
  let resultX = x * c0r0 + y * c0r1 + z * c0r2;
  let resultY = x * c1r0 + y * c1r1 + z * c1r2;
  let resultZ = x * c2r0 + y * c2r1 + z * c2r2;
  return [resultX, resultY, resultZ];
}

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
  .attr("stroke-width", 1.5);

var path2 = svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "green")
  .attr("stroke-width", 1.5);

var path3 = svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 1.5);


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
}

simulacion(30, matA);