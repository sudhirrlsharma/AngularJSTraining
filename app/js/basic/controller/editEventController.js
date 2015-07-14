'use strict';

eventsApp.controller('editEventController', function ($scope) {
    $scope.saveEvent = function (evnts) {
        console.log(evnts);
    };

    $scope.cancleEvent = function (evnts) {
        $window.location = "EventDetails.html";
    };
    
});
