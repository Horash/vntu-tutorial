var informationApp = angular.module('InformationApp', []);

informationApp.controler('StoreController', function(){
	$scope.data =[
		{
			"id":"1",
			"team":"̳��� - �����", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", 
			"links":[
				{
					"language":"ua",
					"chenal":"Football1", 
					"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"
				}
				]},
		{
			"team":"���� - ̳���", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", 
			"links":[{
				"language":"ua",
				"chenal":"Football1", 
				"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"}]},
		{
			"team":"̳��� - �����", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", \
			"links":[{
				"language":"ua",
				"chenal":"Football1", 
				"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"}]},
		{
			"team":"������� - ̳���", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", 
			"links":[{
				"language":"ua",
				"chenal":"Football1", 
				"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"}]},
		{
			"team":"̳��� - �����", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", 
			"links":[{
				"language":"ua",
				"chenal":"Football1", 
				"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"}]},
		{
			"team":"̳��� - �������", 
			"date":"12.05.16 19:00", 
			"stadion":"��� ����", 
			"links":[{
				"language":"ua",
				"chenal":"Football1", 
				"URL":"123"
				},{
					"language":"ru",
					"chenal":"Football2", 
					"URL":"124"}]}
	]
});

