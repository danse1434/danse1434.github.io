export {actualizarGrafico};

function actualizarGrafico(dataFrame, svg, margin, width, height, x, y) {
  // Dominios
  // x.domain(d3.extent(datos, (d) => d.retorno));
  x.domain([-5, 13]);
  y.domain(dataFrame.map((d) => d.estado));

  var bars = svg.selectAll(".bar").data(dataFrame);

  bars.exit().remove();

  var new_bars = bars
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", (d) => y(d.estado))
    .attr("height", y.bandwidth());

  new_bars
    .merge(bars)
    .attr("x", (d) => x(Math.min(d.retorno, 0)))
    .attr("fill", (d) => d3.schemeSet1[d.retorno > 0 ? 1 : 0])
    .attr("width", (d) => Math.abs(x(d.retorno) - x(0)));

  var legend = svg.selectAll("text").data(dataFrame);

  legend.exit().remove();

  var new_legend = legend
    .enter()
    .append("text")
    .attr("y", (d, i) => y(d.estado) + y.bandwidth() / 2) // .attr("y", (d, i) => {y(i) + y.bandwidth() / 2})
    .attr("dy", "0.35em");

  new_legend
    .merge(legend)
    .attr("font-family", "sans-serif") // .append("g")
    .attr("font-size", "20px")
    .attr("text-anchor", (d) => (d.retorno < 0 ? "end" : "start"))
    .attr("x", (d) => x(d.retorno) + Math.sign(d.retorno - 0) * 4)
    .text((d) => d3.format(".1f")(d.retorno));

  // add the x Axis
  var xAxis = svg.append("g");

  xAxis.exit().remove();

  var new_xAxis = xAxis
    .attr("transform", "translate(0," + height + ")");

  new_xAxis.merge(xAxis)
    .call(d3.axisBottom(x).tickSize(8)).call((g) => g.selectAll(".tick text").attr("font-size", "20px"));

  // add the y Axis
  svg.append("g").call((g) => {
    g.attr("transform", "translate(" + x(0) + ", " + 0 + ")")
      .call(
        d3
          .axisLeft(y)
          .tickFormat((d, i) => dataFrame[i].estado)
          .tickSize(0)
          .tickPadding(6)
      )
      .call((g) =>
        g
          .selectAll(".tick text")
          .attr("font-size", "20px")
          .filter((d, i) => dataFrame[i].retorno < 0)
          .attr("text-anchor", "start")
          .attr("x", 10)
      );
  });
}
