var dataReg = [{"Study.ID":"Barbhaiya1990c","mean":3.66,"SD":0.996,"CV":"0.272","n":5,"Dosis":"1000mg (31-60mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1000mg","lower":2.664,"upper":4.656,"Orden":3,"CL":3.12,"size":0.1386},{"Study.ID":"Barbhaiya1990c","mean":1.55,"SD":0.4038,"CV":"0.26","n":5,"Dosis":"1000mg (11-30mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1000mg","lower":1.1462,"upper":1.9538,"Orden":4,"CL":1.02,"size":0.3418},{"Study.ID":"Barbhaiya1990c","mean":1.12,"SD":0.3108,"CV":"0.277","n":5,"Dosis":"1000mg (<10mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1000mg","lower":0.8092,"upper":1.4308,"Orden":5,"CL":0,"size":0.444},{"Study.ID":"Barbhaiya1990c","mean":7.86,"SD":1.476,"CV":"0.188","n":5,"Dosis":"1000mg (>90mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1000mg","lower":6.384,"upper":9.336,"Orden":1,"CL":6.9,"size":0.0935},{"Study.ID":"Barbhaiya1990c","mean":4.54,"SD":0.774,"CV":"0.17","n":5,"Dosis":"1000mg (61-90mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1000mg","lower":3.766,"upper":5.314,"Orden":2,"CL":4.38,"size":0.1783},{"Study.ID":"Cronqvist1992","mean":5.83,"SD":0.468,"CV":"0.08","n":5,"Dosis":"1 g (107mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1 g","lower":5.362,"upper":6.298,"Orden":6,"CL":6.42,"size":0.2949},{"Study.ID":"Cronqvist1992","mean":2.08,"SD":0.576,"CV":"0.277","n":6,"Dosis":"1 g (42.5mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1 g","lower":1.504,"upper":2.656,"Orden":7,"CL":2.55,"size":0.2396},{"Study.ID":"Cronqvist1992","mean":1.19,"SD":0.378,"CV":"0.318","n":7,"Dosis":"1 g (22.0mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"1 g","lower":0.812,"upper":1.568,"Orden":8,"CL":1.32,"size":0.3651},{"Study.ID":"Cronqvist1992","mean":0.38,"SD":0.138,"CV":"0.365","n":3,"Dosis":"1 g (GFR ND)","Poblacion":"Renal","Tipo":"CL","Do":"1 g","lower":0.242,"upper":0.518,"Orden":9,"CL":0,"size":1},{"Study.ID":"Jonckheere2016","mean":2.88,"SD":0.397,"CV":"0.138","n":20,"Dosis":"2 g (TVCL GFR:56.7mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"2 g","lower":2.483,"upper":3.277,"Orden":10,"CL":4.08,"size":0.3476},{"Study.ID":"Tam2003","mean":7,"SD":4.3,"CV":"0.614","n":12,"Dosis":"2 g q12h (>100mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"2 g","lower":2.7,"upper":11.3,"Orden":11,"CL":6.6,"size":0.0321},{"Study.ID":"Tam2003","mean":4.4,"SD":2.2,"CV":"0.5","n":12,"Dosis":"2 g q12h (60-100mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"2 g","lower":2.2,"upper":6.6,"Orden":12,"CL":4.8,"size":0.0627},{"Study.ID":"Tam2003","mean":2.6,"SD":1.1,"CV":"0.423","n":12,"Dosis":"1-2 g q24h (11-59mL/min)","Poblacion":"Renal","Tipo":"CL","Do":"2 g","lower":1.5,"upper":3.7,"Orden":13,"CL":2.1,"size":0.1255}];
var dataPred = [{"pred":0.463,"se":0.2978,"ci.lb":-0.1207,"ci.ub":1.0467,"cr.lb":-0.8037,"cr.ub":1.7297,"CLCR":0},{"pred":0.5496,"se":0.2913,"ci.lb":-0.0214,"ci.ub":1.1205,"cr.lb":-0.7113,"cr.ub":1.8104,"CLCR":0.1},{"pred":0.6361,"se":0.2849,"ci.lb":0.0777,"ci.ub":1.1945,"cr.lb":-0.6191,"cr.ub":1.8913,"CLCR":0.2},{"pred":0.7226,"se":0.2786,"ci.lb":0.1767,"ci.ub":1.2686,"cr.lb":-0.5271,"cr.ub":1.9724,"CLCR":0.3},{"pred":0.8092,"se":0.2724,"ci.lb":0.2754,"ci.ub":1.343,"cr.lb":-0.4353,"cr.ub":2.0537,"CLCR":0.4},{"pred":0.8957,"se":0.2663,"ci.lb":0.3738,"ci.ub":1.4176,"cr.lb":-0.3437,"cr.ub":2.1351,"CLCR":0.5},{"pred":0.9823,"se":0.2603,"ci.lb":0.4721,"ci.ub":1.4925,"cr.lb":-0.2523,"cr.ub":2.2168,"CLCR":0.6},{"pred":1.0688,"se":0.2545,"ci.lb":0.57,"ci.ub":1.5676,"cr.lb":-0.161,"cr.ub":2.2987,"CLCR":0.7},{"pred":1.1553,"se":0.2488,"ci.lb":0.6677,"ci.ub":1.643,"cr.lb":-0.07,"cr.ub":2.3807,"CLCR":0.8},{"pred":1.2419,"se":0.2433,"ci.lb":0.7651,"ci.ub":1.7187,"cr.lb":0.0208,"cr.ub":2.463,"CLCR":0.9},{"pred":1.3284,"se":0.2379,"ci.lb":0.8622,"ci.ub":1.7947,"cr.lb":0.1114,"cr.ub":2.5455,"CLCR":1},{"pred":1.415,"se":0.2327,"ci.lb":0.9589,"ci.ub":1.8711,"cr.lb":0.2018,"cr.ub":2.6281,"CLCR":1.1},{"pred":1.5015,"se":0.2277,"ci.lb":1.0552,"ci.ub":1.9478,"cr.lb":0.292,"cr.ub":2.711,"CLCR":1.2},{"pred":1.5881,"se":0.2229,"ci.lb":1.1511,"ci.ub":2.025,"cr.lb":0.382,"cr.ub":2.7941,"CLCR":1.3},{"pred":1.6746,"se":0.2183,"ci.lb":1.2467,"ci.ub":2.1025,"cr.lb":0.4717,"cr.ub":2.8774,"CLCR":1.4},{"pred":1.7611,"se":0.214,"ci.lb":1.3417,"ci.ub":2.1805,"cr.lb":0.5613,"cr.ub":2.961,"CLCR":1.5},{"pred":1.8477,"se":0.2099,"ci.lb":1.4363,"ci.ub":2.259,"cr.lb":0.6506,"cr.ub":3.0447,"CLCR":1.6},{"pred":1.9342,"se":0.206,"ci.lb":1.5304,"ci.ub":2.338,"cr.lb":0.7397,"cr.ub":3.1287,"CLCR":1.7},{"pred":2.0208,"se":0.2024,"ci.lb":1.624,"ci.ub":2.4175,"cr.lb":0.8286,"cr.ub":3.2129,"CLCR":1.8},{"pred":2.1073,"se":0.1991,"ci.lb":1.717,"ci.ub":2.4976,"cr.lb":0.9173,"cr.ub":3.2973,"CLCR":1.9},{"pred":2.1938,"se":0.1961,"ci.lb":1.8094,"ci.ub":2.5782,"cr.lb":1.0058,"cr.ub":3.3819,"CLCR":2},{"pred":2.2804,"se":0.1934,"ci.lb":1.9012,"ci.ub":2.6595,"cr.lb":1.094,"cr.ub":3.4668,"CLCR":2.1},{"pred":2.3669,"se":0.1911,"ci.lb":1.9924,"ci.ub":2.7415,"cr.lb":1.182,"cr.ub":3.5518,"CLCR":2.2},{"pred":2.4535,"se":0.1891,"ci.lb":2.0829,"ci.ub":2.8241,"cr.lb":1.2698,"cr.ub":3.6371,"CLCR":2.3},{"pred":2.54,"se":0.1874,"ci.lb":2.1727,"ci.ub":2.9073,"cr.lb":1.3573,"cr.ub":3.7227,"CLCR":2.4},{"pred":2.6265,"se":0.1861,"ci.lb":2.2618,"ci.ub":2.9913,"cr.lb":1.4447,"cr.ub":3.8084,"CLCR":2.5},{"pred":2.7131,"se":0.1852,"ci.lb":2.3501,"ci.ub":3.076,"cr.lb":1.5318,"cr.ub":3.8944,"CLCR":2.6},{"pred":2.7996,"se":0.1846,"ci.lb":2.4378,"ci.ub":3.1615,"cr.lb":1.6187,"cr.ub":3.9806,"CLCR":2.7},{"pred":2.8862,"se":0.1844,"ci.lb":2.5247,"ci.ub":3.2477,"cr.lb":1.7053,"cr.ub":4.067,"CLCR":2.8},{"pred":2.9727,"se":0.1846,"ci.lb":2.6108,"ci.ub":3.3346,"cr.lb":1.7917,"cr.ub":4.1537,"CLCR":2.9},{"pred":3.0592,"se":0.1852,"ci.lb":2.6962,"ci.ub":3.4223,"cr.lb":1.8779,"cr.ub":4.2406,"CLCR":3},{"pred":3.1458,"se":0.1862,"ci.lb":2.7809,"ci.ub":3.5107,"cr.lb":1.9639,"cr.ub":4.3277,"CLCR":3.1},{"pred":3.2323,"se":0.1875,"ci.lb":2.8649,"ci.ub":3.5998,"cr.lb":2.0496,"cr.ub":4.415,"CLCR":3.2},{"pred":3.3189,"se":0.1892,"ci.lb":2.9481,"ci.ub":3.6896,"cr.lb":2.1351,"cr.ub":4.5026,"CLCR":3.3},{"pred":3.4054,"se":0.1912,"ci.lb":3.0307,"ci.ub":3.7801,"cr.lb":2.2204,"cr.ub":4.5904,"CLCR":3.4},{"pred":3.4919,"se":0.1936,"ci.lb":3.1126,"ci.ub":3.8713,"cr.lb":2.3055,"cr.ub":4.6784,"CLCR":3.5},{"pred":3.5785,"se":0.1963,"ci.lb":3.1938,"ci.ub":3.9631,"cr.lb":2.3903,"cr.ub":4.7666,"CLCR":3.6},{"pred":3.665,"se":0.1993,"ci.lb":3.2745,"ci.ub":4.0556,"cr.lb":2.475,"cr.ub":4.8551,"CLCR":3.7},{"pred":3.7516,"se":0.2026,"ci.lb":3.3545,"ci.ub":4.1486,"cr.lb":2.5594,"cr.ub":4.9438,"CLCR":3.8},{"pred":3.8381,"se":0.2062,"ci.lb":3.434,"ci.ub":4.2422,"cr.lb":2.6435,"cr.ub":5.0327,"CLCR":3.9},{"pred":3.9247,"se":0.21,"ci.lb":3.513,"ci.ub":4.3363,"cr.lb":2.7275,"cr.ub":5.1218,"CLCR":4},{"pred":4.0112,"se":0.2142,"ci.lb":3.5914,"ci.ub":4.4309,"cr.lb":2.8112,"cr.ub":5.2112,"CLCR":4.1},{"pred":4.0977,"se":0.2185,"ci.lb":3.6694,"ci.ub":4.526,"cr.lb":2.8947,"cr.ub":5.3007,"CLCR":4.2},{"pred":4.1843,"se":0.2231,"ci.lb":3.747,"ci.ub":4.6216,"cr.lb":2.978,"cr.ub":5.3905,"CLCR":4.3},{"pred":4.2708,"se":0.2279,"ci.lb":3.8241,"ci.ub":4.7175,"cr.lb":3.0611,"cr.ub":5.4805,"CLCR":4.4},{"pred":4.3574,"se":0.2329,"ci.lb":3.9008,"ci.ub":4.8139,"cr.lb":3.144,"cr.ub":5.5707,"CLCR":4.5},{"pred":4.4439,"se":0.2381,"ci.lb":3.9772,"ci.ub":4.9106,"cr.lb":3.2267,"cr.ub":5.6611,"CLCR":4.6},{"pred":4.5304,"se":0.2435,"ci.lb":4.0532,"ci.ub":5.0077,"cr.lb":3.3092,"cr.ub":5.7517,"CLCR":4.7},{"pred":4.617,"se":0.249,"ci.lb":4.1289,"ci.ub":5.1051,"cr.lb":3.3914,"cr.ub":5.8425,"CLCR":4.8},{"pred":4.7035,"se":0.2547,"ci.lb":4.2043,"ci.ub":5.2028,"cr.lb":3.4735,"cr.ub":5.9336,"CLCR":4.9},{"pred":4.7901,"se":0.2606,"ci.lb":4.2794,"ci.ub":5.3008,"cr.lb":3.5553,"cr.ub":6.0248,"CLCR":5},{"pred":4.8766,"se":0.2665,"ci.lb":4.3542,"ci.ub":5.399,"cr.lb":3.637,"cr.ub":6.1162,"CLCR":5.1},{"pred":4.9631,"se":0.2726,"ci.lb":4.4288,"ci.ub":5.4975,"cr.lb":3.7184,"cr.ub":6.2078,"CLCR":5.2},{"pred":5.0497,"se":0.2788,"ci.lb":4.5032,"ci.ub":5.5962,"cr.lb":3.7997,"cr.ub":6.2997,"CLCR":5.3},{"pred":5.1362,"se":0.2852,"ci.lb":4.5773,"ci.ub":5.6951,"cr.lb":3.8808,"cr.ub":6.3917,"CLCR":5.4},{"pred":5.2228,"se":0.2916,"ci.lb":4.6513,"ci.ub":5.7943,"cr.lb":3.9617,"cr.ub":6.4839,"CLCR":5.5},{"pred":5.3093,"se":0.2981,"ci.lb":4.725,"ci.ub":5.8936,"cr.lb":4.0424,"cr.ub":6.5762,"CLCR":5.6},{"pred":5.3958,"se":0.3047,"ci.lb":4.7986,"ci.ub":5.9931,"cr.lb":4.1229,"cr.ub":6.6688,"CLCR":5.7},{"pred":5.4824,"se":0.3114,"ci.lb":4.872,"ci.ub":6.0927,"cr.lb":4.2032,"cr.ub":6.7616,"CLCR":5.8},{"pred":5.5689,"se":0.3182,"ci.lb":4.9453,"ci.ub":6.1926,"cr.lb":4.2834,"cr.ub":6.8545,"CLCR":5.9},{"pred":5.6555,"se":0.325,"ci.lb":5.0184,"ci.ub":6.2925,"cr.lb":4.3634,"cr.ub":6.9476,"CLCR":6},{"pred":5.742,"se":0.3319,"ci.lb":5.0914,"ci.ub":6.3926,"cr.lb":4.4432,"cr.ub":7.0409,"CLCR":6.1},{"pred":5.8286,"se":0.3389,"ci.lb":5.1643,"ci.ub":6.4928,"cr.lb":4.5228,"cr.ub":7.1343,"CLCR":6.2},{"pred":5.9151,"se":0.346,"ci.lb":5.237,"ci.ub":6.5932,"cr.lb":4.6023,"cr.ub":7.2279,"CLCR":6.3},{"pred":6.0016,"se":0.3531,"ci.lb":5.3096,"ci.ub":6.6936,"cr.lb":4.6816,"cr.ub":7.3217,"CLCR":6.4},{"pred":6.0882,"se":0.3602,"ci.lb":5.3822,"ci.ub":6.7942,"cr.lb":4.7607,"cr.ub":7.4157,"CLCR":6.5},{"pred":6.1747,"se":0.3674,"ci.lb":5.4546,"ci.ub":6.8948,"cr.lb":4.8397,"cr.ub":7.5098,"CLCR":6.6},{"pred":6.2613,"se":0.3747,"ci.lb":5.5269,"ci.ub":6.9956,"cr.lb":4.9185,"cr.ub":7.604,"CLCR":6.7},{"pred":6.3478,"se":0.382,"ci.lb":5.5991,"ci.ub":7.0964,"cr.lb":4.9972,"cr.ub":7.6984,"CLCR":6.8},{"pred":6.4343,"se":0.3893,"ci.lb":5.6713,"ci.ub":7.1974,"cr.lb":5.0757,"cr.ub":7.793,"CLCR":6.9},{"pred":6.5209,"se":0.3967,"ci.lb":5.7434,"ci.ub":7.2984,"cr.lb":5.154,"cr.ub":7.8877,"CLCR":7},{"pred":6.6074,"se":0.4041,"ci.lb":5.8154,"ci.ub":7.3995,"cr.lb":5.2323,"cr.ub":7.9826,"CLCR":7.1},{"pred":6.694,"se":0.4116,"ci.lb":5.8873,"ci.ub":7.5006,"cr.lb":5.3103,"cr.ub":8.0776,"CLCR":7.2},{"pred":6.7805,"se":0.419,"ci.lb":5.9592,"ci.ub":7.6018,"cr.lb":5.3883,"cr.ub":8.1727,"CLCR":7.3},{"pred":6.867,"se":0.4266,"ci.lb":6.031,"ci.ub":7.7031,"cr.lb":5.4661,"cr.ub":8.268,"CLCR":7.4},{"pred":6.9536,"se":0.4341,"ci.lb":6.1027,"ci.ub":7.8044,"cr.lb":5.5437,"cr.ub":8.3634,"CLCR":7.5},{"pred":7.0401,"se":0.4417,"ci.lb":6.1744,"ci.ub":7.9058,"cr.lb":5.6212,"cr.ub":8.459,"CLCR":7.6},{"pred":7.1267,"se":0.4493,"ci.lb":6.246,"ci.ub":8.0073,"cr.lb":5.6986,"cr.ub":8.5547,"CLCR":7.7},{"pred":7.2132,"se":0.4569,"ci.lb":6.3176,"ci.ub":8.1088,"cr.lb":5.7759,"cr.ub":8.6505,"CLCR":7.8},{"pred":7.2997,"se":0.4646,"ci.lb":6.3891,"ci.ub":8.2103,"cr.lb":5.853,"cr.ub":8.7464,"CLCR":7.9},{"pred":7.3863,"se":0.4723,"ci.lb":6.4606,"ci.ub":8.3119,"cr.lb":5.9301,"cr.ub":8.8425,"CLCR":8},{"pred":7.4728,"se":0.48,"ci.lb":6.5321,"ci.ub":8.4136,"cr.lb":6.007,"cr.ub":8.9387,"CLCR":8.1},{"pred":7.5594,"se":0.4877,"ci.lb":6.6035,"ci.ub":8.5153,"cr.lb":6.0837,"cr.ub":9.035,"CLCR":8.2},{"pred":7.6459,"se":0.4955,"ci.lb":6.6748,"ci.ub":8.617,"cr.lb":6.1604,"cr.ub":9.1314,"CLCR":8.3},{"pred":7.7325,"se":0.5032,"ci.lb":6.7461,"ci.ub":8.7188,"cr.lb":6.2369,"cr.ub":9.228,"CLCR":8.4},{"pred":7.819,"se":0.511,"ci.lb":6.8174,"ci.ub":8.8206,"cr.lb":6.3134,"cr.ub":9.3246,"CLCR":8.5},{"pred":7.9055,"se":0.5188,"ci.lb":6.8887,"ci.ub":8.9224,"cr.lb":6.3897,"cr.ub":9.4214,"CLCR":8.6},{"pred":7.9921,"se":0.5266,"ci.lb":6.9599,"ci.ub":9.0243,"cr.lb":6.4659,"cr.ub":9.5182,"CLCR":8.7},{"pred":8.0786,"se":0.5345,"ci.lb":7.0311,"ci.ub":9.1262,"cr.lb":6.542,"cr.ub":9.6152,"CLCR":8.8},{"pred":8.1652,"se":0.5423,"ci.lb":7.1022,"ci.ub":9.2281,"cr.lb":6.618,"cr.ub":9.7123,"CLCR":8.9},{"pred":8.2517,"se":0.5502,"ci.lb":7.1733,"ci.ub":9.3301,"cr.lb":6.6939,"cr.ub":9.8094,"CLCR":9},{"pred":8.3382,"se":0.5581,"ci.lb":7.2444,"ci.ub":9.432,"cr.lb":6.7698,"cr.ub":9.9067,"CLCR":9.1},{"pred":8.4248,"se":0.566,"ci.lb":7.3155,"ci.ub":9.5341,"cr.lb":6.8455,"cr.ub":10.0041,"CLCR":9.2},{"pred":8.5113,"se":0.5739,"ci.lb":7.3865,"ci.ub":9.6361,"cr.lb":6.9211,"cr.ub":10.1016,"CLCR":9.3},{"pred":8.5979,"se":0.5818,"ci.lb":7.4576,"ci.ub":9.7382,"cr.lb":6.9966,"cr.ub":10.1991,"CLCR":9.4},{"pred":8.6844,"se":0.5897,"ci.lb":7.5286,"ci.ub":9.8402,"cr.lb":7.072,"cr.ub":10.2968,"CLCR":9.5},{"pred":8.7709,"se":0.5977,"ci.lb":7.5995,"ci.ub":9.9424,"cr.lb":7.1474,"cr.ub":10.3945,"CLCR":9.6},{"pred":8.8575,"se":0.6056,"ci.lb":7.6705,"ci.ub":10.0445,"cr.lb":7.2226,"cr.ub":10.4923,"CLCR":9.7},{"pred":8.944,"se":0.6136,"ci.lb":7.7414,"ci.ub":10.1466,"cr.lb":7.2978,"cr.ub":10.5902,"CLCR":9.8},{"pred":9.0306,"se":0.6216,"ci.lb":7.8123,"ci.ub":10.2488,"cr.lb":7.3729,"cr.ub":10.6882,"CLCR":9.9},{"pred":9.1171,"se":0.6296,"ci.lb":7.8832,"ci.ub":10.351,"cr.lb":7.4479,"cr.ub":10.7863,"CLCR":10}];

var w = document.getElementById('contenedorGrafico').clientWidth;
// console.log(w);

var margin = { top: 20, right: 20, bottom: 50, left: 50 },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    nudge = [5, -5];;

var svg = d3.select("#contenedorGrafico")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr('viewbox', '`0 0 ' + (height + margin.top + margin.bottom) + (width + margin.left + margin.right) + '`')
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Definición de escalas
var scale_x = d3.scaleLinear()
    // .domain([-0.5, d3.max(dataReg, d => { return d['CL']; })])
    .domain([-0.5, 8])
    .range([0, width])
    .clamp(true);

var scale_y = d3.scaleLinear()
    // .domain([0, d3.max(dataReg, d => { return d['mean']; })])
    .domain([0, 8])
    .range([height, 0])
    .clamp(true);

var scale_r = d3.scaleLinear()
    .domain([0, d3.max(dataReg, d => { return d['size']; })])
    .range([2, 25]);

var svg_circles = svg.selectAll('circle')
    .data(dataReg)
    .enter()
    .append('circle')
    .attr('cx', d => { return scale_x(d['CL']); })
    .attr('cy', d => { return scale_y(d['mean']); })
    .attr('r',  d => { return scale_r(d['size']); })
    .attr('fill', 'white')
    .attr('stroke', 'darkblue')
    .attr('color', 'darkblue')
    .on('mouseover', tipMouseover)
    .on('mouseout', tipMouseout);

/* Líneas con Predicciones */
svg.append('path').datum(dataPred)  // Predicción
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 1.2)
  .attr("d", d3.line()
    .x(d => { return scale_x( d['CLCR']) })
    .y(d => { return scale_y( d['pred']) })
    );
svg.append('path').datum(dataPred) // Límite inferior
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 1.2)
  .attr('stroke-dasharray', 4)
  .attr("d", d3.line()
    .x(d => { return scale_x( d['CLCR']) })
    .y(d => { return scale_y( d['ci.lb']) })
    );
svg.append('path').datum(dataPred)// Límite superior
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.2)
    .attr('stroke-dasharray', 4)
    .attr("d", d3.line()
      .x(d => { return scale_x( d['CLCR']) })
      .y(d => { return scale_y( d['ci.ub']) })
      );

/* Tooltip */
var focus = svg.append('g')
  .append('circle')
  .style("fill", "none")
  .attr("stroke", "black")
  .attr('r', 8.5)
  .style("opacity", 0);

var focusText = svg
  .append('g')
  .append('text')
  .style("opacity", 0)
  .attr("text-anchor", "left")
  .attr("alignment-baseline", "middle");

// Funciones de acción
var tooltip = svg.append('g')
  .attr('class', 'tooltip')
  .append('text')
  .attr('class', 'tooltip')
  .style('opacity', 0);

  var div = d3.select("#contenedorGrafico")
    .append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
  

function tipMouseover(d) {
  
  var html  = 'Estudio: ' + d['Study.ID'] + '<br>' + 'Dosis: ' + d['Dosis'] + '<br>' + 'N: ' + d['n'];
  div.transition()
    .duration(200)  
    .style('opacity', .9);
  
  div.html(html)
    .style('left', (d3.event.pageX) + "px")
    .style('top', (d3.event.pageY - 28) + "px");

    // Mejor utilizar un div que un svg::text
    // .style('left', scale_x(d['CL']) + 'px')
    // .style('top', scale_x(d['mean']) + 'px')
    
  // tooltip.html(html)
  //   .attr('x', scale_x(d['CL']))
  //   .attr('y', scale_y(d['mean']))
  //   .transition()
  //   .duration(200) // ms
  //   .style("opacity", .9) // started as 0!
}

function tipMouseout(d) {
  div.transition()		
    .duration(500)
    .style("opacity", 0);
  
  // tooltip.transition()
  //     .duration(300) // ms
  //     .style("opacity", 0); // don't care about position!
};

// Ejes de Gráfico
var xAxis = d3.axisBottom().scale(scale_x);
var yAxis = d3.axisLeft().scale(scale_y);

svg.append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${height-0})`);

svg.append('text')
  .attr("transform", "translate(" + (width/2) + ", " + (height + margin.top + 20) + ")")
  .style('text-anchor', 'middle')
  .style('font-weight', 'bold')
  .text('Aclaramiento de Creatinina (L/h)');

svg.append('g')
    .call(yAxis)
    .attr('transform', `translate(0, 0)`);

svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', 0 - (height/2))
    .attr('y', 0 - margin.left)
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .text('Aclaramiento Cefepime (L/h)');