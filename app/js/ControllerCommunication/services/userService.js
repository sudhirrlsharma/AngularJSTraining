communicationModule.service('userService', function() {
    var userService = {};
    userService.userData = {};
    userService.setUserData = function(userData) {
		userService.userData = userData;
    };
	userService.getUserData = function(userData) {
		return userService.userData;
    };
    return userService;
});
