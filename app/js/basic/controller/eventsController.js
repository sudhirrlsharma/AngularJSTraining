'use strict';
eventsApp.controller('eventsController',  ['$scope', '$timeout','$routeParams', 'eventService', function($scope,$timeout,$routeParams, eventService) {
	$scope.sortOrder = "voteCount";
    if($routeParams.eventI){
        console.log($routeParams.eventId);

    }
	eventService.getEvent(function(data){
        $scope.event=data;
    });
    
//    var eventData = eventService.getEvent();
//    
//    eventData.then(function (data){
//         console.log(data);
//        $scope.event = data;
//    }, function(status){
//        console.log(status);
//    });
//    console.log(eventData);

	$scope.increaseVote = function(t) {
		t.voteCount = t.voteCount + 1;
	};

	$scope.decreaseVote = function(t) {
		t.voteCount = t.voteCount - 1;
	};

}]);
