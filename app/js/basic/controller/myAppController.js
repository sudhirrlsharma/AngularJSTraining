var myApp  = angular.module('myApp', []);

myAppController = myApp.controller('myAppController', function($scope) {

   // console.log($scope);    
    $scope.name = "John Doe";
    
    
    $scope.changeName = function() {        
        $scope.name = "foo";
        $scope.greeting = "Good Morning";
        console.log($scope.name);
    
    }

});
