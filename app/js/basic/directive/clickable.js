'use strict';

eventsApp.directive('clickable', function() {
return {
	restrict : "E",
	scope : {
		foo : '=',
		bar : '='
	},
	template : '<ul style="background-color: lightblue"><li>{{foo}}</li><li>{{bar}}</li></ul>',
	link : function(scope, element, attrs) {
		element.bind('click', function() {
				scope.foo++;
				scope.bar++;
				scope.$apply();
			});
		}
	}

});