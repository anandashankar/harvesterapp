var myApp = angular.module('myApp', ["ngRoute"]);
myApp.controller('AppCtrl', ['$scope', '$http', '$timeout', function($scope, $http) {
  console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/api/harvesters').success(function(response){
      console.log("I got the data I requested");
      $scope.harvesters = response;
      $scope.mdata = "";

    });

  };

  refresh();

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm"
    })
    .when("/map", {
        templateUrl : "map.htm"
    })
    .when("/system", {
        templateUrl : "system.htm"
    });
});  


  $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/pressure"
  }).then(function mySucces(response) {
    $scope.myPressure = response.data;
  }, function myError(response) {
    $scope.myPressure = response.data.records;
  });


  $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/fuellevel"
  }).then(function mySucces(response) {
    $scope.myFuel = response.data;
  }, function myError(response) {
    $scope.myFuel = response.data.records;
  });

 

  $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/oillevel"
  }).then(function mySucces(response) {
    $scope.myOil = response.data;
  }, function myError(response) {
    $scope.myOil = response.data.records;
  });


  $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/location"
  }).then(function mySucces(response) {
    $scope.myLoc = response.data;
}, function myError(response) {
    $scope.myLoc = response.data.records; 
  });

    $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/motortemp"
  }).then(function mySucces(response) {
    $scope.myMotor = response.data;
}, function myError(response) {
    $scope.myMotor = response.data.records; 
  });

    $http({
    method : "GET",
    url : "http://localhost:8080/api/harvesters/oiltemp"
  }).then(function mySucces(response) {
    $scope.myOilTemp = response.data;
}, function myError(response) {
    $scope.myOilTemp = response.data.records; 
  });

}]); 

