var mainApp = angular.module('MainApp', [
    'ngRoute', 
    'ngResource',
    
    ]);

mainApp.config(['$routeProvider', function($routeProvide){
	$routeProvide 
	  .when('/news', {
		  templateUrl: 'templateUrl/news.html'
	  })
	  .when('/Team', {
		  templateUrl: 'templateUrl/Team.html'
	  })
	  .when('/calendar', {
		  templateUrl: 'templateUrl/calendar.html'
	  })
	  .when('/Seria_A', {
		  templateUrl: 'templateUrl/Seria_A.html'
	  })
	  .when('/Countre_cup', {
		  templateUrl: 'templateUrl/Countre_cup.html'
	  })
	  .when('/Internation_cup', {
		  templateUrl: 'templateUrl/Internation_cup.html'
	  })
	  .otherwise({
		redirectTo: '/'
	  });
}]);

mainApp.controller('MainController', ['$scope', function($scope) {
    $scope.data;
	$scope.getParam = function(){
		alert($scope.data);
	}
}]);
