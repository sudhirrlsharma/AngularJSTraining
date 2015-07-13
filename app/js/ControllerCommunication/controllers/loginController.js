communicationModule.controller('loginController', function($scope, userService, $location) {
	
	$scope.userName = 'su';
	$scope.password = 'su';
	$scope.userData = {
		'name' : $scope.userName,
		'password': $scope.password
	};
   
	$scope.login = function(){
		alert($scope.userData);
		userService.setUserData($scope.userData); 
		$location.path('/homePage');
	}
});