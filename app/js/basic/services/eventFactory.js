'use strict';
eventsApp.factory('eventService', function($http, $q, $log) {
	return{
        getEvent: function() {
            var deferred = $q.defer();
            
            $http({method: 'GET', url: '../../data/event/1'}).
              success(function(data,status,header,config){
                deferred.resolve(data);
            }).
            error(function(data, status, header, config){
                deferred.reject(status);
            });

            return deferred.promise;

        }
    };
});