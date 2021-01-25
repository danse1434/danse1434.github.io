// Función de wrapping

export function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        lineHeight = 1.1, // ems
        
        tspan = text.text(null).append("tspan")
            .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
            .attr("y", y)
            .attr("dy", dy + "em")
            .style("text-align", "center");     

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            var textWidth = tspan.node().getComputedTextLength();
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                ++lineNumber;
                tspan = text.append("tspan").attr("x", function(d) { return d.children || d._children ? -10 : 10; }).attr("y", 0).attr("dy", lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}