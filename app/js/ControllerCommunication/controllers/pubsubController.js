communicationModule.controller('pubsubController', function($scope, CoreReactorChannel) {

});
communicationModule.controller('firstController', function($scope, CoreReactorChannel) {
	
	$scope.panic = 'calm';
    $scope.elevate = function () {
        CoreReactorChannel.elevatedCoreTemperature(1, 200);
    };
    CoreReactorChannel.onElevatedCoreTemperature($scope, function (coreid, temperature) {
        $scope.panic = 'extreme panic';
    });

});

communicationModule.controller('secondController', function($scope, CoreReactorChannel) {
	
	$scope.alert = 'none';
    CoreReactorChannel.onElevatedCoreTemperature($scope, function (coreid, temperature) {
        $scope.alert = 'core temp is at' + temperature;
    });

});