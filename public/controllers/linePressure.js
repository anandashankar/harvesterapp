var baseURL = 'http://localhost:8080/api/harvesters';
var press = []; 
var dataset = []; 

//Ajax call for data
$.getJSON(baseURL+'/pressure', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      press.push({x: key, y: value.pressure[0]});     
    }); 

      //push latest 10 values of motortemp in dataset array
      for (var i = (press.length - 10); i <= (press.length - 1); i++) {
          dataset.push(press[i].y); 
          //console.log(dataset); 
          console.log("pressurechart works!"); 
      }
  
//debugger

//calculate and plot regression line with the latest data 

el = d3.select('.chart-press');

var margin = {top: 10, right: 10, bottom: 30, left: 50};
var width = 400 - margin.left - margin.right;
var height = 200 - margin.top - margin.bottom;

var svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var forecast_x = 3
var lrdata = dataset.map(function(v, i) { return [i, v]})
var lr = ss.linearRegressionLine(ss.linearRegression(lrdata));

var xScale = d3.scale.linear()
  .domain([0, dataset.length*forecast_x])
  .range([0, width]);

var yScale = d3.scale.linear()
  .domain([0, Math.max(d3.max(dataset), lr(dataset.length*forecast_x))])
  .range([height, 0]);

var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom")

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")

svg.append("g").
  attr("transform", "translate(0, " + height + ")").
  call(xAxis)
  .append("text")
  .attr("x", (width / 2))
  .attr("y", 30)
  .style("text-anchor", "middle")
  .style("font-size", "10px")
  .text("time");


svg.append("g")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-size", "10px")
  .text("Pressure (psi)");

svg.selectAll('.domain')
  .attr({
    stroke: "grey",
    "stroke-width": 1,
    fill: "none",
  })

var line = d3.svg.line()
  .x(function(d, i) { return xScale(i); })
  .y(function(d) { return yScale(d); });

svg.append("path")
  .datum(dataset)
  .attr({
    d: line,
    stroke: "red",
    "stroke-width": 2,
    fill: "none",
  });

var lrline = d3.svg.line()
  .x(function(d, i) { return xScale(i); })
  .y(function(d, i) { return yScale(lr(i)); });
/*
svg.append("path")
  .datum(Array(dataset.length*forecast_x))
  .attr({
    d: lrline,
    stroke: "green",
    "stroke-width": 1,
    fill: "none",
    "stroke-dasharray": "5,5",
  });
*/
svg.selectAll()
  .data(dataset)
  .enter()
  .append("circle")
  .attr({
    r: 3,
    cx: function(d, i) { return xScale(i); },
    cy: function(d) { return yScale(d); },
  });
 }); 
