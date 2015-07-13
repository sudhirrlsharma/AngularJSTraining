communicationModule.controller('parentController', function($scope, userService, sharedService) {
	
	$scope.parentUserData = userService.getUserData();
	$scope.parentData = '';
    	
});