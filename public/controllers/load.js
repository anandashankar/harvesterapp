var baseURL = 'http://localhost:8008/api/harvesters'; 
var press = []; 
var idle=0, inactive=0, working=0, a, b, c; 

//Ajax call for data
$.getJSON(baseURL+'/pressure', function(data){ 
    $.each(data, function(key, value){  
      press.push({x: key, y: value.pressure[0]});     
    }); 

    for (var i = (press.length - 50); i <= (press.length - 1); i++) {
          if(press[i].y == 1){
            idle+=1;  
          }else if (press[i].y == 0) {
            inactive+=1;
          }else {
            working+=1;    
          }
      }

      a = (360/50)*(idle);
      b = (360/50)*(inactive);
      c = (360/50)*(working); 

      console.log(a, b, c); 

const pieChart = document.getElementById("mypieChart");
  var mypieChart = new Chart(pieChart, {
    type: 'pie',
    data:  {
    labels: [
        "inactive",
        "idle",
        "working",        
    ],
    datasets: [
        {
            data: [b, a, c],  //calculate 
            backgroundColor: [
                "#B22222",
                "#36A2EB",
                "#DAA520"              
            ],
            hoverBackgroundColor: [
                "#B22222",
                "#36A2EB",
                "#DAA520"                
            ]
        }]
}, 
    options: {
        animation:{
            animateScale:true,
            animateRotate: true
        }
    }

});

}); 


        
