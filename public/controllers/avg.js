var baseURL = 'http://206.189.49.127:8008/api/harvesters';

var fuel = []; 
var dataset = []; 
var dataset1 = []; 
var dataset2 = []; 
var dataset3 = []; 
var dataset4 = []; 
var q1, q2, q3, q4, q5;  

//Ajax call for data
$.getJSON(baseURL+'/fuellevel', function(data){ 
    //console.log(data);
    $.each(data, function(key, value){  
      fuel.push({x: value.createdAt, y: value.fuellevel});     
    }); 

    for (var i = (fuel.length - 50); i <= (fuel.length - 1); i++) {
          //dataset.push(fuel[i].y);
          if(fuel[i].y > fuel[i-1].y){
            var trHTML = fuel[i].x;
            var subtr_date = trHTML.substring(0, 10);
            var subtr_time = trHTML.substring(11, 19);
            console.log("Refueled at "+trHTML); 
          }    
      }

    $('#location').append(subtr_date);       //append date and time to the UI
    $('#location1').append(subtr_time);



      //push latest 70 values of motortemp in dataset array
    for (var i = (fuel.length - 10); i <= (fuel.length - 1); i++) {
          dataset.push(fuel[i].y);    
      }
        q1 = (dataset[0]+dataset[1]+dataset[2]+dataset[3]+dataset[4]+dataset[5]+dataset[6]+dataset[7]+dataset[8]+dataset[9])/10; 

     for (var i = (fuel.length - 20); i <= (fuel.length - 11); i++) {
          dataset1.push(fuel[i].y);    
      }

        q2 = (dataset[0]+dataset[1]+dataset[2]+dataset[3]+dataset[4]+dataset[5]+dataset[6]+dataset[7]+dataset[8]+dataset[9])/10; 

     for (var i = (fuel.length - 30); i <= (fuel.length - 21); i++) {
          dataset2.push(fuel[i].y);    
      }

        q3 = (dataset2[0]+dataset2[1]+dataset2[2]+dataset2[3]+dataset2[4]+dataset2[5]+dataset2[6]+dataset2[7]+dataset2[8]+dataset2[9])/10; 

     for (var i = (fuel.length - 40); i <= (fuel.length - 31); i++) {
          dataset3.push(fuel[i].y);    
      }

        q4 = (dataset3[0]+dataset3[1]+dataset3[2]+dataset3[3]+dataset3[4]+dataset3[5]+dataset3[6]+dataset3[7]+dataset3[8]+dataset3[9])/10; 
     
     for (var i = (fuel.length - 50); i <= (fuel.length - 41); i++) {
          dataset4.push(fuel[i].y);    
      }

        q5 = (dataset4[0]+dataset[1]+dataset4[2]+dataset4[3]+dataset4[4]+dataset4[5]+dataset4[6]+dataset4[7]+dataset4[8]+dataset4[9])/10; 
     

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["q1", "q2", "q3", "q4", "q5"],
        datasets: [{
            label: "Avg monthly Fuel Consumption (%lit)",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [q1, q2, q3, q4, q5],
        }]
    },

    // Configuration options go here
    options: {}
});

}); 




        
