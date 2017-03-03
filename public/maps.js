var map;
var points = [];


$.ajax({
        type:"GET",
        dataType:"json",
        url:"/api/harvesters/location",
        success: function(result) 
        {

          for(var i=0;i<result.length;i++) 
          {
            points.push(result[i]);
            
          }

        }
       });

  //console.log(points);


function initialize() { 
    var myLatLng = new google.maps.LatLng(61.44783, 23.860631);
    var mapOptions = {
               zoom: 16,
               center: myLatLng,
               mapTypeId: google.maps.MapTypeId.ROADMAP
            }; 
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

     /* for( i = 0; i < points.length; i++) {
            var latLng = new google.maps.LatLng(points[i].lat, points[i].lng);*/
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            }); 
     
            console.log("success") ;  
    }
        //var pinImage = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
          google.maps.event.addDomListener(window, 'load', initialize);

/*  
function addMarkers() {
    // when the map is initialized and the points have been initialized, add them to the map
    if ((map != null) && (points_lat.length > 0)) {
     for (var i = 0; i < points.length; i++) {

      
       } 
    }

}


/*
$.getJSON("http://localhost:8080/api/harvesters/location", function(data){ 
       
       
    	$.each(data, function(key, value){          
      	points.push({x: key, y: value});
    	  console.log(points);
    });
  */ 

//ajax call to retrive location data viz. latitude and longitude




//initialize map 



//adding maker 
 

