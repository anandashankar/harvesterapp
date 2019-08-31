var baseURL = 'http://206.189.49.127:8008/api/harvesters';

var app = angular.module('autoRefreshApp', []);
app.controller('autoRefreshController', ['$scope', '$http', '$timeout', function($scope, $http, $interval) {
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
    url : baseURL+'/pressure'
  }).then(function mySucces(response) {
    $scope.myPressure = response.data;
  }, function myError(response) {
    $scope.myPressure = response.data.records;
  });


  $http({
    method : "GET",
    url : baseURL+'/fuellevel'
  }).then(function mySucces(response) {
    $scope.myFuel = response.data;
  }, function myError(response) {
    $scope.myFuel = response.data.records;
  });

 

  $http({
    method : "GET",
    url : baseURL+'/oillevel'
  }).then(function mySucces(response) {
    $scope.myOil = response.data;
  }, function myError(response) {
    $scope.myOil = response.data.records;
  });


  $http({
    method : "GET",
    url : baseURL+'/location'
  }).then(function mySucces(response) {
    $scope.myLoc = response.data;
}, function myError(response) {
    $scope.myLoc = response.data.records; 
  });

    $http({
    method : "GET",
    url : baseURL+'/motortemp'
  }).then(function mySucces(response) {
    $scope.myMotor = response.data;
}, function myError(response) {
    $scope.myMotor = response.data.records; 
  });

    $http({
    method : "GET",
    url : baseURL+'/oiltemp'
  }).then(function mySucces(response) {
    $scope.myOilTemp = response.data;
}, function myError(response) {
    $scope.myOilTemp = response.data.records; 
  });

  $http({
    method : "GET",
    url : baseURL+'/boom/boomlift'
  }).then(function mySucces(response) {
    $scope.myBoomLift = response.data;
    //console.log(response.data);
}, function myError(response) {
    $scope.myBoomLift = response.data.records; 
  });

  $http({
    method : "GET",
    url : baseURL+'/boom/boomfold'
  }).then(function mySucces(response) {
    $scope.myBoomFold = response.data;
    //console.log(response.data);
}, function myError(response) {
    $scope.myBoomFold = response.data.records; 
  });

$http({
    method : "GET",
    url : baseURL+'/boom/boomrotate'
  }).then(function mySucces(response) {
    $scope.myBoomRotate = response.data;
    //console.log(response.data);
}, function myError(response) {
    $scope.myBoomRotate = response.data.records; 
  });



}]); 



    

      
      
      

     
      
        
      
      

     
      
   
