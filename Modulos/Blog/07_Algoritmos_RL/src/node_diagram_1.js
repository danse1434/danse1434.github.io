import { wrap } from "./wrapping_function.js";

var margin = { top: 5, right: 5, bottom: 5, left: 5 },
    width  = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var nodePlot = d3.select('#mi_grafico_nodos').append('svg')
    .classed("svg-content-responsive", true)
    .attr('viewBox', [0, 0, width, height])
    .attr('preserveAspectRatio', "xMinYMin meet")
    .append('g')
    // .attr('width', width + margin.left + margin.right)
    // .attr('height', height + margin.top + margin.bottom)
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var dataUrl = "./Modulos/Blog/07_Algoritmos_RL/data/redDatos.json" // Esta dirección es relativa a index.html

d3.json(dataUrl, function(err, data) {

    var force = d3.forceSimulation(data.nodes)                  // Crea simulación en array con nodos
        .force('link', d3.forceLink()                           // Crea una fuerza de unión "link" 
            .id(d => { return d.id })                           // Selecciona el nodo ancestro
            .distance(d => {return 15})
            .links(data.links))                                 // Especifica las uniones
        .force('charge', d3.forceManyBody().strength(-400))       // Crea una fuerza de carga de fuerza -400 (repulsiva)
        .force('center', d3.forceCenter(width/2, height/2))     // Crea una fuerza de centrado al centro
        .force('collision', d3.forceCollide()                   // Crea una fuerza de colisión entre nodos
            .radius(d=>{return "0.5em"})
            .strength(1))
        .on("tick", ticked);    
    
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
      .classed('node', true)
      .classed("fixed", d => {d.fx !== undefined}); 
    
    node.append("circle")
        .attr('r', "0.5em")
        .attr('fill', d => {return d.color})
        .attr('stroke', 'black')
        .style('opacity', 0.9);

    node.append("text")
        .attr('dx', 12)
        .attr('dy', ".35em")
        .attr('font-size', "8.5px")
        // .attr('rotate', 2)
        .attr('font-family', "sans-serif")
        // .attr("fill", "none")
        // .attr("stroke", "white")
        // .attr("stroke-width", 0.1)
        .text( d => {return d.name})
        .call(wrap, 80);
    
    node.call(d3.drag()                 // Crea comportamiento de Arrastre
        .on('start', dragStart)
        .on('drag',  dragMove)
        .on('start', dragEnd))
        .on('click', click);

    function ticked() {
        link
            .attr('x1', d => { return d.source.x; })
            .attr('y1', d => { return d.source.y; })
            .attr('x2', d => { return d.target.x; })
            .attr('y2', d => { return d.target.y; });
        
        node
            .attr("transform", d => { return "translate(" + d.x + ", " + d.y + ")" });
    }

    // Funciones de clickeo y arrastre
    function click(event, d) {
        delete d.fx;
        delete d.fy;
        d3.select(this).classed("fixed", false);
        force.alpha(1).restart();
      }
    function dragStart(d) {
        d3.select(d).classed("fixed", true);
        d.attr('fill', 'red');
        // force.restart();
      }
    function dragMove(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
        force.restart();
    }
    function dragEnd(d) {
        if (!d.active) force.alphaTarget(0);
        d.x = null;
        d.y = null;
        force.restart();
    }
    
    document.getElementById("botonReinicio").onclick = function () {
        var listaNodos = document.getElementsByClassName("node");
        
        for (let i = 0; i < listaNodos.length; i++) {
            const element = listaNodos[i];
            
            element.setAttribute('fixed', true);
            element.setAttribute('fx', width/2);
            element.setAttribute('fy', height/2);
            element.setAttribute('transform', "translate(0, 0)");

            // console.log(element);
        }        
        force.restart();
      };
    
});