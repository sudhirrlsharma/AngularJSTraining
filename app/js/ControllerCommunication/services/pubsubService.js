communicationModule.service('CoreReactorChannel', function ($rootScope) {

    // local constants for the message ids.  
    // these are private implementation detail
    var ELEVATED_CORE_TEMPERATURE_MESSAGE = "elevatedCoreMessage";

    // publish elevatedCoreTemperature
    // note that the parameters are particular to the problem domain
    var elevatedCoreTemperature = function (core_id, temperature) {
        $rootScope.$broadcast(ELEVATED_CORE_TEMPERATURE_MESSAGE, {
            core_id: core_id,
            temperature: temperature
        });
    };

    // subscribe to elevatedCoreTemperature event.
    // note that you should require $scope first 
    // so that when the subscriber is destroyed you 
    // don't create a closure over it, and te scope can clean up. 
    var onElevatedCoreTemperature = function ($scope, handler) {
        $scope.$on(ELEVATED_CORE_TEMPERATURE_MESSAGE, function (event, message) {
            // note that the handler is passed the problem domain parameters 
            handler(message.core_id, message.temperature);
        });
    };

    // other CoreReactorChannel events would go here.

    return {
        elevatedCoreTemperature: elevatedCoreTemperature,
        onElevatedCoreTemperature: onElevatedCoreTemperature
    };
});

