  
  function myFunc1(){
  var dataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/pressure", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){ 
      dataPoints.push({x: key, y: value.pressure[0]});
      /*for(var i=0; i<value.pressure.length; i++){
      dataPoints.push({x: key, y: value.pressure[i]});
    }*/
    });
    
    var chart = new CanvasJS.Chart("chartContainer",{
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
        dataPoints : dataPoints
      }]
    });
    chart.render();
  });

}




  function myFunc2(){
  var dataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/fuellevel", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.fuellevel});
    });
    
    var chart = new CanvasJS.Chart("chartContainer1",{
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
        dataPoints : dataPoints
      }]
    });
    chart.render();
  });
  
}



  function myFunc3(){
  var dataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/oillevel", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.oillevel});
    });
    
    console.log("great!") ;
    var chart = new CanvasJS.Chart("chartContainer2",{
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
        dataPoints : dataPoints
      }]
    });
    chart.render();
  });      

}

function myFunc4(){
  var dataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/motortemp", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.motortemp});
    });
    
    console.log("great!") ;
    var chart = new CanvasJS.Chart("chartContainer3",{
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
        color: "rgba(255, 128, 0, 0.8)",
        dataPoints : dataPoints
      }]
    });
    chart.render();
  });      

}

function myFunc5(){
  var dataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/oiltemp", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.oiltemp});
    });
    
    console.log("great!") ;
    var chart = new CanvasJS.Chart("chartContainer4",{
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
        color: "rgba(255, 255, 0, 0.8)",
        dataPoints : dataPoints
      }]
    });
    chart.render();
  });      

}

function myFunc6(){
  var dataPoints = [];
  var newdataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/boom/boomlift", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomlcc});
    });
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomlup});
    });
    
    console.log("boomlift");
    var chart = new CanvasJS.Chart("chartContainer5",{
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
        dataPoints : dataPoints
      },
      {
        type: "stepLine",
        name: "lup",
        color: "rgba(0, 0, 153, 0.5)",
        dataPoints : newdataPoints
      }]
    });
    chart.render();
  });      

}

function myFunc7(){
  var dataPoints = [];
  var newdataPoints = [];
  $.getJSON("http://localhost:8080/api/harvesters/boom/boomfold", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomfcc});
    });
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomfup});
    });
    
    console.log("boomfold");
    var chart = new CanvasJS.Chart("chartContainer6",{
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
        dataPoints : dataPoints
      },
      {
        type: "stepLine",
        name: "fup",
        color: "rgba(0, 0, 153, 0.5)",
        dataPoints : newdataPoints
      }]
    });
    chart.render();
  });      

}

function myFunc8(){
  var dataPoints = [];
  var newdataPoints = [];
  var verynewdataPoint = [];
  $.getJSON("http://localhost:8080/api/harvesters/boom/boomrotate", function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      dataPoints.push({x: key, y: value.boomtlp});
    });
    $.each(data, function(key, value){  
      newdataPoints.push({x: key, y: value.boomtrp});
    });
    $.each(data, function(key, value){  
      verynewdataPoint.push({x: key, y: value.boomrcc});
    });

    
    console.log("boomrotate");
    var chart = new CanvasJS.Chart("chartContainer7",{
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
        dataPoints : dataPoints
      },
      {
        type: "stepLine",
        name: "trp",
        color: "rgba(0, 0, 153, 0.5)",
        dataPoints : newdataPoints
      },
      {
       type: "stepLine",
        name: "rcc",
        color: "rgba(255, 0, 0, 0.5)",
        dataPoints : verynewdataPoint 
      }]
    });
    chart.render();
  });      

}


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


