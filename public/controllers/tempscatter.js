
    dl = d3.select('.chart-scatter');
    var margin = {
            top: 10,
            right: 20,
            bottom: 20,
            left: 40
        },
        width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //GET data from url

    var xx = [];
    var yy = []; 
    var oilTemp = []; 
    var motorTemp = [];

    $.getJSON("http://46.101.113.34:8008/api/harvesters/oiltemp", function(otemp){ 
    //console.log(data);
    $.each(otemp, function(key, value){  
      oilTemp.push({x: key, y: value.oiltemp});     
    });  
    for (var i = (oilTemp.length - 1000); i <= (oilTemp.length - 1); i++) {
                xx.push(oilTemp[i].y); 
                
        }

    console.log(xx); 

    $.getJSON("http://46.101.113.34:8008/api/harvesters/motortemp", function(mtemp){ 
    //console.log(data);
    $.each(mtemp, function(key, value){  
      motorTemp.push({x: key, y: value.motortemp});     
    }); 

    for (var i = (motorTemp.length - 1000); i <= (motorTemp.length - 1); i++) {
                yy.push(motorTemp[i].y); 
                
        }

    console.log(yy); 

   /* for (var i = 0; i <= xx.length; i++) {
        for (var j = 0; j < yy.length; j++) {
           data = [xx[i], yy[j]];  
           console.log(data); 
        }
    }*/

    //console.log(data);
    
    var data = create_data();
    console.log(data); 
     
    data.forEach(function(d) {
        d.x = +d.x;
        d.y = +d.y;
        d.yhat = +d.yhat;
    });

    var line = d3.svg.line()
        .x(function(d) {
            return x(d.x);
        })
        .y(function(d) {
            return y(d.yhat);
        });

    x.domain(d3.extent(data, function(d) {
        return d.x;
    }));
    y.domain(d3.extent(data, function(d) {
        return d.y;
    }));

   var svg = dl.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("oil temp");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("motor temp")

    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 2)
        .attr("cx", function(d) {
            return x(d.x);
        })
        .attr("cy", function(d) {
            return y(d.y);
        });

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)


    function create_data() {
        var x = xx;
        var y = yy;
        var x_mean = 0;
        var y_mean = 0;
        var term1 = 0;
        var term2 = 0;
        var n = 1000; 
        // create x and y values
        /*for (var i = 0; i < n; i++) {
            //noise = noise_factor * Math.random();
            //noise *= Math.round(Math.random()) == 1 ? 1 : -1;
            y.push(i / 5 + noise);
            x.push(i + 1);
            x_mean += x[i]
            y_mean += y[i]
        }*/
        // calculate mean x and y
        x_mean /= n;
        y_mean /= n;

        // calculate coefficients
        var xr = 0;
        var yr = 0;
        for (i = 0; i < x.length; i++) {
            xr = x[i] - x_mean;
            yr = y[i] - y_mean;
            term1 += xr * yr;
            term2 += xr * xr;

        }
        var b1 = term1 / term2;
        var b0 = y_mean - (b1 * x_mean);
        // perform regression 

        yhat = [];
        // fit line using coeffs
        for (i = 0; i < x.length; i++) {
            yhat.push(b0 + (x[i] * b1));
        }

        var data = [];
        for (i = 0; i < y.length; i++) {
            data.push({
                "yhat": yhat[i],
                "y": y[i],
                "x": x[i]
            })
        }
        return (data);
        }; 
}); 
});    
