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
    .when("/machinedata", {
        templateUrl : "machinedata.htm"
    })
    .when("/dashboard", {
        templateUrl : "dashboard.htm"
    })
    .when("/analytics", {
        templateUrl : "analytics.htm"
    });
    .when("/boom", {
        templateUrl : "boom.htm"
    });
    .when("/raw", {
        templateUrl : "raw.htm"
    });
});  
}]); 

