/**
 * New node file
 */
'use strict';
eventsApp.controller('MainCtrl', function($scope) {
	$scope.foo = 0;
	$scope.bar = 0;

	$scope.$watch('foo', function() {
	      console.log("Foo value changed " + $scope.foo)
	   });

	$scope.hello = "Hello";

	$scope.setHello = function() {
		$scope.hello = "World";
	};
});