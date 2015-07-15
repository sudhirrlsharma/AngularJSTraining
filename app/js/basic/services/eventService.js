'use strict';

eventsApp.service('eventService', function($http,$log) {
	this.getEvent = function(successcb) {
        $http({method: 'GET', url: '../../data/event/1'}).
        success(function(data,status,header,config){
             $log.info(data,status,header());
            successcb(data);
        }).
        error(function(data, status, header, config){
            $log.warn(data,status,header(),config);
        });
	}
	   
	this.save = function() {
		console.log("saving");

	}

});