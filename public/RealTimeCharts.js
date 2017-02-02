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
      data: [{
        type: "spline",
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
      data: [{
        type: "spline",
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
      data: [{
        type: "spline",
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
      data: [{
        type: "spline",
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
      data: [{
        type: "spline",
        color: "rgba(255, 255, 0, 0.8)",
        dataPoints : dataPoints
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
}
window.onload=start;
