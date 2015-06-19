var drawCircles = function (domSelector) {
  var svg,
      innerCircle,
      outerCircle,
      isLocked;

  svg = d3.select(domSelector)
    .append('svg')
    .attr("height", 100)
    .attr("width", 100);

  outerCircle = svg.append("circle")
      .attr('class', 'locked-on-circle')
      .attr('cy', 45)
      .attr('cx', 45)
      .attr('r', 45)
      .style("fill", "#303030")

  innerCircle = svg.append("circle")
      .attr('class', 'locked-on-circle')
      .attr('cy', 45)
      .attr('cx', 45)
      .attr('r', 40)
      .style("fill", "white");

  loadingCircle = svg.append('circle')
    .attr('r', 15)
    .attr('cy', 45)
    .attr('cx', 45)
    .attr('fill', '#303030');

  svg.on('mouseenter', function () {
    if (isLocked) {
      return;
    }

    isLocked = false;

    loadingCircle
      .transition()
      .attr("fill", 'green')
      .attr("r", 35)
      .ease('back')
      .duration(1500)
      .each('end', function () {
        isLocked = true;

        outerCircle
          .style("fill", 'green')

        $('.notification').fadeIn(500);
      })

    loadingCircle
      .transition()
      .delay(1550)
      .attr("fill", 'green')
      .duration(10);
  });

  svg.on('mouseleave', function () {
    if (!isLocked) {
      isLocked = false;

      loadingCircle
        .transition()
        .attr("r", 15)
        .attr("fill", '#303030');
    }
  });
};
