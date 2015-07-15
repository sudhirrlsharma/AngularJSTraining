var myApp  = angular.module('myApp', []);

myApp.controller('myAppController', function($scope) {

   // console.log($scope);    
    $scope.name = "John Doe";
    $scope.customerInfo = {name:  $scope.name};
    
    
    $scope.changeName = function() {        
        $scope.name = "foo";
        $scope.greeting = "Good Morning";
        console.log($scope.name);
    
    }
            
});

 myApp.controller("parantCtrl", function ($scope) {
     
      $scope.handleBroadcast = function (msg) {
            console.log("#########message to be broadcase is " +msg);
            $scope.$broadcast('broadcastEvent', { broadcastMsg: msg });
     };
     $scope.$on('eventName', function (event, args) {
            $scope.parantMessage = args.message;
            console.log($scope.parantMessage);
        });
 });
 
 myApp.controller("child1Ctrl", function ($scope) {
         $scope.handleEmit = function (msg) {
             $scope.$emit('eventName', { message: msg });
     };
     
     $scope.$on('broadcastEvent', function (event, args) {
            console.log('calling bradcast' + JSON.stringify(args));
            $scope.child1Message = args.broadcastMsg;
            console.log($scope.child1Message);
        });
 });
myApp.controller("grandChild1Ctrl", function ($scope) {
       $scope.$on('eventName', function (event, args) {
           $scope.grandChild1Message = args.message;
           console.log($scope.grandChild1Messag);
    });
    
     $scope.$on('broadcastEvent', function (event, args) {
           console.log('calling bradcast' + JSON.stringify(args));
            $scope.grandChild1Messag = args.broadcastMsg;
            console.log($scope.grandChild1Message);
        });
 });
myApp.controller("child2Ctrl", function ($scope) {
       $scope.$on('eventName', function (event, args) {
           $scope.child2Message = args.message;
           console.log($scope.child2Message);
    });
    
         $scope.$on('broadcastEvent', function (event, args) {
            console.log('calling bradcast' + JSON.stringify(args));
            $scope.child2Message = args.broadcastMsg;
            console.log($scope.child2Message);
        });
 });
myApp.controller("grandChild2Ctrl", function ($scope) {
       $scope.$on('eventName', function (event, args) {
           $scope.grandChild2Message = args.message;
           console.log( $scope.grandChild2Message);
    });
    
      $scope.$on('broadcastEvent', function (event, args) {
          console.log('calling bradcast' + JSON.stringify(args));
            $scope.grandChild2Message = args.broadcastMsg;
            console.log($scope.grandChild2Message);
        });
 });


myApp.directive('myappDirective', function() {
      return {
        restrict: 'E',
        template: '<b>Hi  {{name}} </b>'
      };
    });


  myApp.directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerName: '=info'
    },
    template: '<br>Customer Name: {{customerName.name}}'
  };
});