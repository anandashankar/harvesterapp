var myApp = angular.module('myAnalyticsApp', ["ngRoute"]);
myApp.controller('AppCtrl1', ['$scope', '$http', '$timeout', function($scope, $http) {
  console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/api/harvesters').success(function(response){
      console.log("I got the data I requested");
      $scope.harvesters = response;
      $scope.mdata = "";

    });

  };

  refresh();

  $http({
    method : "GET",
    url : "http://localhost:8008/api/harvesters/motortemp"
  }).then(function mySucces(response) {
    $scope.myMotor = response.data;
    var temp = [response.data[response.data.length - 1].motortemp];   
}, function myError(response) {
    $scope.myMotor = response.data.records; 
  });

}]); 

