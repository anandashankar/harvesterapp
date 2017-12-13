var baseURL = 'http://localhost:8008/api/harvesters';
var dataPressure = [];
var dataTemp = [];

$.getJSON(baseURL+'/oiltemp', function(datam){ 
    //console.log(data);
    $.each(datam, function(key, value){  
      dataTemp.push({x: key, y: value.oiltemp});
    });

    var temp = dataTemp[dataTemp.length -1].y; 
    var temp1 = dataTemp[dataTemp.length -2].y; 
    var temp2 = dataTemp[dataTemp.length -3].y; 
    var temp3 = dataTemp[dataTemp.length -4].y; 
    var temp4 = dataTemp[dataTemp.length -5].y; 
    var temp5 = dataTemp[dataTemp.length -6].y; 
    var temp6 = dataTemp[dataTemp.length -7].y; 
    var temp7 = dataTemp[dataTemp.length -8].y; 
    var temp8 = dataTemp[dataTemp.length -9].y; 
    var temp9 = dataTemp[dataTemp.length -10].y; 
    var temp10 = dataTemp[dataTemp.length -11].y;
    var temp11 = dataTemp[dataTemp.length -12].y;
    var temp12 = dataTemp[dataTemp.length -13].y;
    var temp13 = dataTemp[dataTemp.length -14].y;
    var temp14 = dataTemp[dataTemp.length -15].y;
    var temp15 = dataTemp[dataTemp.length -16].y;
    var temp16 = dataTemp[dataTemp.length -17].y;
    var temp17 = dataTemp[dataTemp.length -18].y;
    var temp18 = dataTemp[dataTemp.length -19].y;
    var temp19 = dataTemp[dataTemp.length -20].y;
    var temp20 = dataTemp[dataTemp.length -21].y; 
    var temp21 = dataTemp[dataTemp.length -22].y; 
    var temp22 = dataTemp[dataTemp.length -23].y; 
    var temp23 = dataTemp[dataTemp.length -24].y; 
    var temp24 = dataTemp[dataTemp.length -25].y; 
    var temp25 = dataTemp[dataTemp.length -26].y; 
    var temp26 = dataTemp[dataTemp.length -27].y; 
    var temp27 = dataTemp[dataTemp.length -28].y; 
    var temp28 = dataTemp[dataTemp.length -29].y; 
    var temp29 = dataTemp[dataTemp.length -30].y; 
    var temp30 = dataTemp[dataTemp.length -31].y;
    var temp31 = dataTemp[dataTemp.length -32].y;
    var temp32 = dataTemp[dataTemp.length -33].y;
    var temp33 = dataTemp[dataTemp.length -34].y;
    var temp34 = dataTemp[dataTemp.length -35].y;
    var temp35 = dataTemp[dataTemp.length -36].y;
    var temp36 = dataTemp[dataTemp.length -37].y;
    var temp37 = dataTemp[dataTemp.length -38].y;
    var temp38 = dataTemp[dataTemp.length -39].y;
    var temp39 = dataTemp[dataTemp.length -40].y;
    var temp40 = dataTemp[dataTemp.length -41].y;
    var temp41 = dataTemp[dataTemp.length -42].y;
    var temp42 = dataTemp[dataTemp.length -43].y;
    var temp43 = dataTemp[dataTemp.length -44].y;
    var temp44 = dataTemp[dataTemp.length -45].y;
    var temp45 = dataTemp[dataTemp.length -46].y;
    var temp46 = dataTemp[dataTemp.length -47].y;
    var temp47 = dataTemp[dataTemp.length -48].y;
    var temp48 = dataTemp[dataTemp.length -49].y;
    var temp49 = dataTemp[dataTemp.length -50].y;

 $.getJSON(baseURL+'/pressure', function(item){ 
    //console.log(data);
      $.each(item, function(key, value){ 
      dataPressure.push({x: key, y: value.pressure[0]});    
    });

      var press = dataPressure[dataPressure.length -1].y; 
      var press1 = dataPressure[dataPressure.length -2].y;
      var press2 = dataPressure[dataPressure.length -3].y;
      var press3 = dataPressure[dataPressure.length -4].y;
      var press4 = dataPressure[dataPressure.length -5].y;
      var press5 = dataPressure[dataPressure.length -6].y;
      var press6 = dataPressure[dataPressure.length -7].y;
      var press7 = dataPressure[dataPressure.length -8].y;
      var press8 = dataPressure[dataPressure.length -9].y;
      var press9 = dataPressure[dataPressure.length -10].y;
      var press10 = dataPressure[dataPressure.length -11].y;
      var press11 = dataPressure[dataPressure.length -12].y;
      var press12 = dataPressure[dataPressure.length -13].y;
      var press13 = dataPressure[dataPressure.length -14].y;
      var press14 = dataPressure[dataPressure.length -15].y;
      var press15 = dataPressure[dataPressure.length -16].y;
      var press16 = dataPressure[dataPressure.length -17].y;
      var press17 = dataPressure[dataPressure.length -18].y;
      var press18 = dataPressure[dataPressure.length -19].y;
      var press19 = dataPressure[dataPressure.length -20].y;
      var press20 = dataPressure[dataPressure.length -21].y; 
      var press21 = dataPressure[dataPressure.length -22].y;
      var press22 = dataPressure[dataPressure.length -23].y;
      var press23 = dataPressure[dataPressure.length -24].y;
      var press24 = dataPressure[dataPressure.length -25].y;
      var press25 = dataPressure[dataPressure.length -26].y;
      var press26 = dataPressure[dataPressure.length -27].y;
      var press27 = dataPressure[dataPressure.length -28].y;
      var press28 = dataPressure[dataPressure.length -29].y;
      var press29 = dataPressure[dataPressure.length -30].y;
      var press30 = dataPressure[dataPressure.length -31].y;
      var press31 = dataPressure[dataPressure.length -32].y;
      var press32 = dataPressure[dataPressure.length -33].y;
      var press33 = dataPressure[dataPressure.length -34].y;
      var press34 = dataPressure[dataPressure.length -35].y;
      var press35 = dataPressure[dataPressure.length -36].y;
      var press36 = dataPressure[dataPressure.length -37].y;
      var press37 = dataPressure[dataPressure.length -38].y;
      var press38 = dataPressure[dataPressure.length -39].y;
      var press39 = dataPressure[dataPressure.length -40].y;
      var press40 = dataPressure[dataPressure.length -41].y;
      var press41 = dataPressure[dataPressure.length -42].y;
      var press42 = dataPressure[dataPressure.length -43].y;
      var press43 = dataPressure[dataPressure.length -44].y;
      var press44 = dataPressure[dataPressure.length -45].y;
      var press45 = dataPressure[dataPressure.length -46].y;
      var press46 = dataPressure[dataPressure.length -47].y;
      var press47 = dataPressure[dataPressure.length -48].y;
      var press48 = dataPressure[dataPressure.length -49].y;
      var press49 = dataPressure[dataPressure.length -50].y;


Highcharts.chart('container', {
    title: {
        text: 'Oil Temp vs Oil Pressure'
    },
    subtitle: {
        text: 'Oil Temp vs. Oil Pressure scatter-plot'
    },
    xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: 'Oil Temp(℃)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Oil Pressure(bar)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    series: [{
        name: 'Normal range',
        type: 'polygon',
        data: [[0, 1], [20, 0], [80, 0], [80, 200], [0, 200], [0, 1]],
        color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
        enableMouseTracking: false

    }, {
        name: 'P-T plot',
        type: 'scatter',
        color: Highcharts.getOptions().colors[1],
        data: [ 
         [temp, press], [temp1, press1], [temp2, press2], [temp3, press3], [temp4, press4], [temp5, press5], [temp6, press6], 
        [temp7, press7], [temp8, press8], [temp9, press9], [temp10, press10], [temp11, press11], [temp12, press12], [temp13, press13], 
        [temp14, press14], [temp15, press15], [temp16, press16], [temp17, press17], [temp18, press18], [temp19, press19], [temp20, press20], [temp21, press21], [temp22, press22], [temp23, press23], [temp24, press24], [temp25, press25], [temp26, press26], 
        [temp27, press27], [temp28, press28], [temp29, press29], [temp30, press30], [temp31, press31], [temp32, press32], [temp33, press33], 
        [temp34, press34], [temp35, press35], [temp36, press36], [temp37, press37], [temp38, press38], [temp39, press39], [temp40, press40], [temp41, press41], [temp42, press42], [temp43, press43], 
        [temp44, press44], [temp45, press45], [temp46, press46], [temp47, press47], [temp48, press48], [temp49, press49]
        ]
    }],
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} ℃, {point.y} bar '
    }
});

});

});
