
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
        enabled: true
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#55BF3B'], // green
            [0.4, '#DDDF0D'], // yellow
            [0.6, '#DF5353'] // red
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

//Pressure indicator 
var chartPressure = Highcharts.chart('container-press', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: 'hydraulic oil pressure'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Hydraulic Oil Pressure',
        data: [0],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">bar</span></div>'
        },
        tooltip: {
            valueSuffix: 'bar'
        }
    }]

    }));


  // Bring life to the dials
setInterval(function () {

    var dataPoints2 = []; 
    var point, 
        inc; 

    $.getJSON("http://46.101.113.34:8008/api/harvesters/pressure", function(data2){ 
    $.each(data2, function(key, value){  
      dataPoints2.push({x: key, y: value.pressure[0]});
    });
           
    inc = dataPoints2[dataPoints2.length - 1].y;

    if (chartPressure) {
        point = chartPressure.series[0].points[0];
        console.log("pressure chart works aswell"); 
        point.update(inc);
    }

});

}, 10000);



