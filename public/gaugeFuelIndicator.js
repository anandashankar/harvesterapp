google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

function displayData(point) {
     
        data.setValue(0, 0, 'Fuel Level');
    }

function loadData(){
      var dataPoints = [];
      var p;
       $.getJSON("http://localhost:8080/api/harvesters/fuellevel", function(data){
        //console.log(data[1].fuellevel);
       p = data.fuellevel;
   });
       if (p) {
                p = (p/1);
                displayData(p);
            }
      
  }

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Fuel Indicator', 0],
          ['Engine RPM', 0],
          ['Oil Temperature', 0]
        ]);

        var options = {
          width: 600, height: 240,
          greenFrom: 50, greenTo: 100,
          redFrom: 0, redTo: 20,
          yellowFrom:20, yellowTo: 50,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        loadData();

        setInterval('loadData()', 1500);

        /*setInterval(function() {
          data.setValue(0, 1, myFunc());
          chart.draw(data, options);
        }, 1000);
        console.log("working end!");*/
      }