'use strict';
eventsApp.controller('eventsController',  ['$scope', 'eventService', function($scope, eventService) {
	console.log(eventService);
	console.log(eventService.getEvent());
	console.log(eventService.save());
	$scope.sortOrder = "voteCount";
	$scope.event = eventService.getEvent();

	$scope.increaseVote = function(t) {
		t.voteCount = t.voteCount + 1;
	};

	$scope.decreaseVote = function(t) {
		t.voteCount = t.voteCount - 1;
	};

}]);
