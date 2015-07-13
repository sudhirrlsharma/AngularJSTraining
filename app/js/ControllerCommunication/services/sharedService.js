communicationModule.service('sharedService', function($rootScope) {
    var sharedService = {};

    sharedService.message = '';
	sharedService.emitMessage = '';

    sharedService.prepForBroadcast = function(msg) {
		this.message = msg;
        this.broadcastItem('to-bro');
    };

    sharedService.broadcastItem = function(eventName) {
        alert('Before broadcast::'+this.message);
		$rootScope.$broadcast(eventName);
    };
	
	sharedService.prepForEmit = function(msg) {
        this.emitMessage = msg;
        $rootScope.$broadcast('handleEmit');
    };

    return sharedService;
});

