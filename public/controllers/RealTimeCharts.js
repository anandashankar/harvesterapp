var baseURL = 'http://localhost:8008/api/harvesters'; 

  function myFunc1(){
  var dataPoints = [];
  var dataset = []; 
  $.getJSON(baseURL+'/pressure', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){ 
      dataPoints.push({x: key, y: value.pressure[0]});
    }); 
    
    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    
    var chart = new CanvasJS.Chart("chartContainer",{
      backgroundColor: "#f1f1f1", 
      title:{
        text:"Oil Pressure"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Oil pressure",
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
      data: [{
        type: "spline",
        name: "oil pressure",
        dataPoints : dataset
      }]
    });
    chart.render();
  });

}


  function myFunc2(){
  var dataPoints = [];
  var dataset = []; 
  $.getJSON(baseURL+'/fuellevel', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.fuellevel});
    });
    
    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y})
    }

    var chart = new CanvasJS.Chart("chartContainer1",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Fuel Level"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Fuel",
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
      data: [{
        type: "spline",
        name: "fuellevel",
        color: "rgba(0, 255, 0, 1.0)",
        dataPoints : dataset
      }]
    });
    chart.render();
  });
  
}

  function myFunc3(){
  var dataPoints = [];
  var dataset = []; 
  $.getJSON(baseURL+'/oillevel', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.oillevel});
    });

    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y})
    }
    
    //console.log("oillevel check!") ;
    var chart = new CanvasJS.Chart("chartContainer2",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Oil Level"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Oil level",
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
      data: [{
        type: "spline",
        name: "oillevel",
        color: "rgba(255, 0, 0, 0.8)",
        dataPoints : dataset
      }]
    });
    chart.render();
  });      

}

function myFunc4(){
  var dataPoints = [];
  var dataset = []; 
  $.getJSON(baseURL+'/motortemp', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.motortemp});
    });

    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y})
    }
    
    //console.log("motortemp check!") ;
    var chart = new CanvasJS.Chart("chartContainer3",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Motor Temperature"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Motor temp",
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
      data: [{
        type: "area",
        name: "motor temp",
        color: "rgba(255, 153, 51, 0.8)",
        dataPoints : dataset
      }]
    });
    chart.render();
  });      

}

function myFunc5(){
  var dataPoints = [];
  var dataset = [];
  $.getJSON(baseURL+'/oiltemp', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.oiltemp});
    });

    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    
    //console.log("oiltemp check!") ;
    var chart = new CanvasJS.Chart("chartContainer4",{
      backgroundColor: "#f1f1f1",
      title:{
        text:"Oil Temperature"
      },
      axisX: {
        title: "time",
        titleFontColor: "black",
        lineThickness: 2
      }, 
      axisY: {
        title: "Oil temp",
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
      data: [{
        type: "area",
        name: "oil temp",
        color: "rgba(255, 153, 0, 0.8)",
        dataPoints : dataset
      }]
    });
    chart.render();
  });      

}

function myFunc6(){
  var dataPoints = [];
  var newdataPoints = [];
  var dataset = []; 
  var newdataset = []; 
  $.getJSON(baseURL+'/boom/boomlift', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomlcc});
    });

    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }

    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomlup});
    });

    for (var j = (newdataPoints.length - 5); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y})
    }
    
    //console.log("boomlift");
    var chart = new CanvasJS.Chart("chartContainer5",{
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
        dataPoints : newdataset
      }]
    });
    chart.render();
  });      

}

function myFunc7(){
  var dataPoints = [];
  var newdataPoints = [];
  var dataset = []; 
  var newdataset = []; 
  $.getJSON(baseURL+'/boom/boomfold', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomfcc});
    });
    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomfup});
    });
    for (var j = (newdataPoints.length - 5); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y})
    }
    //console.log("boomfold");
    var chart = new CanvasJS.Chart("chartContainer6",{
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
        dataPoints : newdataset
      }]
    });
    chart.render();
  });      

}

function myFunc8(){
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
    for (var i = (dataPoints.length - 5); i <= (dataPoints.length - 1); i++) {
      dataset.push({x: i, y: dataPoints[i].y}) 
    }
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomtrp});
    });
    for (var j = (newdataPoints.length - 5); j <= (newdataPoints.length - 1); j++) {
      newdataset.push({x: j, y: newdataPoints[j].y}) 
    }
    $.each(data, function(key, value){  
      verynewdataPoint.push({x: key, y: value.boomrcc});
    });
    for (var k = (verynewdataPoint.length - 5); k <= (verynewdataPoint.length - 1); k++) {
      verynewdataset.push({x: k, y: verynewdataPoint[k].y}) 
    }

    //console.log("boomrotate");
    var chart = new CanvasJS.Chart("chartContainer7",{
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
        color: "rgba(0, 128, 0, 0.5)",
        dataPoints : dataset
      },
      {
        type: "stepLine",
        name: "trp",
        color: "rgba(0, 0, 153, 0.5)",
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
  myFunc4();
  myFunc5();
  myFunc6();
  myFunc7();
  myFunc8();
}
window.onload=start;


