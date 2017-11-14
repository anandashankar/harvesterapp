var motorTemp = []; 
var dataset = []; 

//Ajax call for data
$.getJSON("http://46.101.113.34:8008/api/harvesters/motortemp", function(tempdata){ 
    //console.log(data);
    $.each(tempdata, function(key, value){  
      motorTemp.push({x: key, y: value.motortemp});   	
  	}); 
    		var ab = (motorTemp[motorTemp.length - 1].y);
    		console.log(ab); 

      //push latest 70 values of motortemp in dataset array
    	for (var i = (motorTemp.length - 50); i <= (motorTemp.length - 1); i++) {
    			dataset.push(motorTemp[i].y); 
    			//console.log(dataset); 
    	}
	
//debugger

//calculate and plot regression line with the latest data 

el = d3.select('.chart-regress');

var margin = {top: 10, right: 10, bottom: 30, left: 50};
var width = 500 - margin.left - margin.right;
var height = 300 - margin.top - margin.bottom;

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
	.orient("bottom");

var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left");

svg.append("g").
	attr("transform", "translate(0, " + height + ")").
	call(xAxis);

svg.append("g").
	call(yAxis)

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
		stroke: "blue",
		"stroke-width": 2,
		fill: "none",
	});

var lrline = d3.svg.line()
	.x(function(d, i) { return xScale(i); })
	.y(function(d, i) { return yScale(lr(i)); });

svg.append("path")
	.datum(Array(dataset.length*forecast_x))
	.attr({
		d: lrline,
		stroke: "green",
		"stroke-width": 1,
		fill: "none",
		"stroke-dasharray": "5,5",
	});

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
