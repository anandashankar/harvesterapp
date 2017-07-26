var motorTemp = []; 
var dataset = []; 

//Ajax call for data
$.getJSON("http://localhost:8080/api/harvesters/motortemp", function(tempdata){ 
    //console.log(data);
    $.each(tempdata, function(key, value){  
      motorTemp.push({x: key, y: value.motortemp});   	
  	}); 
    		var ab = (motorTemp[motorTemp.length - 1].y);
    		console.log(ab); 

      //push latest 70 values of motortemp in dataset array
    	for (var i = (motorTemp.length - 70); i <= (motorTemp.length - 1); i++) {
    			dataset.push(motorTemp[i].y); 
    			//console.log(dataset); 
    	}

      /*var temp1 = motorTemp[motorTemp.length -1].y;
      var temp2 = motorTemp[motorTemp.length -2].y;
      var temp3 = motorTemp[motorTemp.length -3].y;
      var temp4 = motorTemp[motorTemp.length -4].y;
      var temp5 = motorTemp[motorTemp.length -5].y;
      var temp6 = motorTemp[motorTemp.length -6].y;
      var temp7 = motorTemp[motorTemp.length -7].y;
      var temp8 = motorTemp[motorTemp.length -8].y;
      var temp9 = motorTemp[motorTemp.length -9].y;
      var temp10 = motorTemp[motorTemp.length -10].y;
      var temp11 = motorTemp[motorTemp.length -11].y;
      var temp12 = motorTemp[motorTemp.length -12].y;
      var temp13 = motorTemp[motorTemp.length -13].y;
      var temp14 = motorTemp[motorTemp.length -14].y;
      var temp15 = motorTemp[motorTemp.length -15].y;
      var temp16 = motorTemp[motorTemp.length -16].y;
      var temp17 = motorTemp[motorTemp.length -17].y;
      var temp18 = motorTemp[motorTemp.length -18].y;
      var temp19 = motorTemp[motorTemp.length -19].y;*/

      //console.log(temp2, temp3, temp, temp1);
	 /*dataset = [temp19, temp18, temp17, temp16, temp15, temp14, temp13, temp12, temp11, temp10, temp9,
	 temp8, temp7, temp6, temp5, temp4, temp3, temp2, temp1]; */
	
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