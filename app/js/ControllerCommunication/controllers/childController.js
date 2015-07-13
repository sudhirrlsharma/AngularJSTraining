communicationModule.controller('childController', function($scope, sharedService) {
	
	$scope.$on('handleBroadcast', function(){
		$scope.child1Data = sharedService.message;
	});
	
	$scope.emit = function(){
		alert('In broadcast::'+$scope.child1Data);
		sharedService.prepForEmit($scope.child1Data);
	};
});


communicationModule.controller('SelfCtrl', function($scope, sharedService) {
    $scope.broadcast = function () {
        $scope.$broadcast('to-child', 'child');
    }
	
	$scope.emit = function () {
        $scope.$emit('to-parent', 'parent');
    }
	
	$scope.broBroadcast = function() {
		sharedService.prepForBroadcast('Bro!!!');
	}
	
});

communicationModule.controller('ParentCtrl', function($scope) {
    $scope.$on('to-parent', function(event,data) {
        console.log('ParentCtrl', data);       //The parent can get value
		$scope.parentData = data;
    });
    $scope.$on('to-child', function(event,data) {
        console.log('ParentCtrl', data);       //The child is not value
		$scope.parentData = data;
    });
});

communicationModule.controller('ChildCtrl', function($scope){
    $scope.$on('to-child', function(event,data) {
        console.log('ChildCtrl', data);         //Children can get value
		$scope.childData = data;
    });
    $scope.$on('to-parent', function(event,data) {
        console.log('ChildCtrl', data);         //The parent is not value
		$scope.childData = data;
    });
});

communicationModule.controller('BroCtrl', function($scope, sharedService){  
    $scope.$on('to-parent', function(event,data) {  
        console.log('BroCtrl', data);          //Levels of no value 
		$scope.broData = data;		
    });  
    $scope.$on('to-child', function(event,data) {  
        console.log('BroCtrl', data);          //Levels of no value  
		$scope.broData = data;
    });
	$scope.$on('to-bro', function(){
		console.log('BroCtrl', sharedService.message);   
		$scope.broData = sharedService.message;
	});
});