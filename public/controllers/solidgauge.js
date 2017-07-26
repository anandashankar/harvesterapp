
var gaugeOptions = {

    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE', 
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#DF5353'], // red 
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'] // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The fuel gauge
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'fuellevel'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Fuel Level',
        data: [0],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">%full</span></div>'
        },
        tooltip: {
            valueSuffix: '%full'
        }
    }]

    }));

  // Bring life to the dials
setInterval(function () {

    var dataPoints = [];
    $.getJSON("http://localhost:8080/api/harvesters/fuellevel", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.fuellevel});
    });
    
    var point; 
       
    var inc = dataPoints[dataPoints.length - 1].y;

    if (chartSpeed) {
        point = chartSpeed.series[0].points[0];
        //inc = Math.round((Math.random() - 0.5) * 100);
        //newVal = point.y + inc;

        /*if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
        }*/
        console.log("chart works")
        point.update(inc);
    }

});

}, 5000);


