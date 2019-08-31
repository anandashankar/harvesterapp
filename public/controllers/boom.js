var baseURL = 'http://206.189.49.127:8008/api/harvesters';

function myFunc1(){
  var dataPoints = [];
  var newdataPoints = [];
  var dataset = []; 
  var newdataset = []; 
  $.getJSON(baseURL+'/boom/boomlift', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomlcc});
    });

    for (var i = (dataPoints.length - 50); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }

    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomlup});
    });

    for (var j = (newdataPoints.length - 50); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y})
    }
    
    //console.log("boomlift");
    var chart = new CanvasJS.Chart("chartContainer",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Boom Lift Control Current (mA) vs. Boom Lift up pressure (bar)"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Liftup Pressure ",
        titleFontColor: "blue",
        lineThickness: 2
      },
      toolTip: {
        shared: true,
        contentFormatter: function (e) {
        var content = " ";
        for (var i = 0; i < e.entries.length; i++) {
          content += e.entries[i].dataSeries.name + " " + "<strong>" + e.entries[i].dataPoint.y + "</strong>";
          content += "<br/>";
        }
        return content;
      }
      },
      data: [
      {
        type: "stepLine",
        name: "lcc",
        color: "rgba(255, 0, 0, 0.5)",
        dataPoints : dataset
      },
      {
        type: "stepLine",
        name: "lup",
        color: "rgba(0, 0, 153, 0.5)",
        lineDashType: "dash",
        dataPoints : newdataset
      }]
    });
    chart.render();
  });      

}

function myFunc2(){
  var dataPoints = [];
  var newdataPoints = [];
  var dataset = []; 
  var newdataset = []; 
  $.getJSON(baseURL+'/boom/boomfold', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomfcc});
    });
    for (var i = (dataPoints.length - 50); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomfup});
    });
    for (var j = (newdataPoints.length - 50); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y})
    }
    //console.log("boomfold");
    var chart = new CanvasJS.Chart("chartContainer1",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Boom Fold Control Current (mA) vs. Boom Fold up pressure (bar)"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Foldup Pressure ",
        titleFontColor: "blue",
        lineThickness: 2
      },
      toolTip: {
        shared: true,
        contentFormatter: function (e) {
        var content = " ";
        for (var i = 0; i < e.entries.length; i++) {
          content += e.entries[i].dataSeries.name + " " + "<strong>" + e.entries[i].dataPoint.y + "</strong>";
          content += "<br/>";
        }
        return content;
      }
      },
      data: [
      {
        type: "stepLine",
        name: "fcc",
        color: "rgba(255, 0, 0, 0.5)",
        dataPoints : dataset
      },
      {
        type: "stepLine",
        name: "fup",
        color: "rgba(0, 0, 153, 0.5)",
        lineDashType: "dash",
        dataPoints : newdataset
      }]
    });
    chart.render();
  });      

}

function myFunc3(){
  var dataPoints = [];
  var newdataPoints = [];
  var verynewdataPoint = [];
  var dataset = [];
  var newdataset = [];
  var verynewdataset = []; 
  $.getJSON(baseURL+'/boom/boomrotate', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomtlp});
    });
    for (var i = (dataPoints.length - 50); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomtrp});
    });
    for (var j = (newdataPoints.length - 50); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y}) 
    }
    $.each(data, function(key, value){  
      verynewdataPoint.push({x: key, y: value.boomrcc});
    });
    for (var k = (verynewdataPoint.length - 50); k <= (verynewdataPoint.length - 1); k++) {
      verynewdataset.push({x: k, y: verynewdataPoint[k].y}) 
    }

    //console.log("boomrotate");
    var chart = new CanvasJS.Chart("chartContainer2",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Boom Rotate Control Current (mA) vs. Boom Turn pressure (bar)"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Boom rotate Pressure ",
        titleFontColor: "blue",
        lineThickness: 2
      },
      toolTip: {
        shared: true,
        contentFormatter: function (e) {
        var content = " ";
        for (var i = 0; i < e.entries.length; i++) {
          content += e.entries[i].dataSeries.name + " " + "<strong>" + e.entries[i].dataPoint.y + "</strong>";
          content += "<br/>";
        }
        return content;
      }
      },
      data: [
      {
        type: "stepLine",
        name: "tlp",
        color: "rgba(102, 102, 255, 0.5)",
        lineDashType: "dash", 
        dataPoints : dataset
      },
      {
        type: "stepLine",
        name: "trp",
        color: "rgba(0, 153, 0, 0.5)",
        lineDashType: "dash",
        dataPoints : newdataset
      },
      {
       type: "stepLine",
        name: "rcc",
        color: "rgba(255, 0, 0, 0.5)",
        dataPoints : verynewdataset 
      }]
    });
    chart.render();
  });      

}

console.log("RTC Controller active"); 

window.setInterval(start, 5000); 


function start(){
  myFunc1();
  myFunc2();
  myFunc3();
}
window.onload=start;


