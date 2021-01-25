// import * as d3 from "../../../../node_modules/d3/index.js";
import { wrap } from "./wrapping_function.js";

// 600 x 400

// var contenedor = document.getElementById("mi_grafico_nodos")
console.log("Hola Mundo 1");

var margin = { top: 20, right: 20, bottom: 20, left: 20 },
    width  = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var nodePlot = d3.select('#mi_grafico_nodos').append('svg')
    .classed("svg-content-responsive", true)
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio', "xMinYMin meet")
    .append('g')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// Por alguna razon no sirve la ruta relativa al json
// var dataUrl = "../data/redDatos.json"

let dataUrl = "./Modulos/Blog/07_Algoritmos_RL/data/redDatos.json"

d3.json(dataUrl, function(err, data) {
    alert(err);

    console.log(data.nodes);
    console.log("Hola Mundo");


    var force = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink()
            .id(d => { return d.id })
            .links(data.links))
        .force('charge', d3.forceManyBody().strength(-600))
        .force('center', d3.forceCenter(width/2, height/2));
    
    // Inicializar links
    var link = nodePlot
        .selectAll(".link")
        .data(data.links)
        .enter()
        .append("line")
            .attr('class', 'link')
            .style("stroke", "#aaa");

    // Inicializar nodos
    var node = nodePlot
        .selectAll(".node")
        .data(data.nodes)
        .enter()
        .append("g")
            .attr('class', 'node');
    
    node.append("circle")
        .attr('r', "0.5em")
        .attr('fill', d => {return d.color})
        .style('opacity', 0.9);

    node.append("text")
        .attr('dx', 12)
        .attr('dy', ".35em")
        .attr('font-size', "9px")
        .text( d => {return d.name})
        .call(wrap, 80);
    
    force.on("tick", ticked)


    function ticked() {
        link
            .attr('x1', d => { return d.source.x; })
            .attr('y1', d => { return d.source.y; })
            .attr('x2', d => { return d.target.x; })
            .attr('y2', d => { return d.target.y; });
        
        node
            .attr("transform", d => { return "translate(" + d.x + ", " + d.y + ")" });
            // .attr('cx', d => { return d.x + 6; })
            // .attr('cy', d => { return d.y - 6; });
    }

});
