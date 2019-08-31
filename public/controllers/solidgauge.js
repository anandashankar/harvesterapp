var baseURL = 'http://206.189.49.127:8008/api/harvesters';

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

// The fuel level indicator 
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

//Oil level indicator 
var chartOil = Highcharts.chart('container-oil', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'oillevel'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Oil Level',
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
    var dataPoints1 = [];
    var point, 
        inc; 

    $.getJSON(baseURL+'/fuellevel', function(data){ 
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.fuellevel});
    });
             
    inc = dataPoints[dataPoints.length - 1].y;

    if (chartSpeed) {
        point = chartSpeed.series[0].points[0];
        console.log("chart works")
        point.update(inc);
    }

});
  
    $.getJSON(baseURL+'/oillevel', function(data1){ 
    //console.log(data1);
    $.each(data1, function(key, value){  
      dataPoints1.push({x: key, y: value.oillevel});
    });
           
    inc = dataPoints1[dataPoints1.length - 1].y;

    if (chartOil) {
        point = chartOil.series[0].points[0];
        //inc = Math.round((Math.random() - 0.5) * 100);
        //newVal = point.y + inc;

        /*if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
        }*/
        console.log("Oil chart works aswell"); 
        point.update(inc);
    }

});
}, 10000);



