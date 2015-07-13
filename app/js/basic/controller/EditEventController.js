'use strict';

EditEventController = eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event){
        alert(event);
        console.log(event);
    };
    $scope.cancleEvent = function(event){
        window.location="EventDetails.html";
        
    }
    
});
