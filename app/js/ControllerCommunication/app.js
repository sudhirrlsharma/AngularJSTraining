'use strict';

/**
 * The main app module.
 *
 * @type {angular.Module}
 */
var communicationModule = angular.module('communication', ['ngRoute']);

communicationModule.config(function ($routeProvider) {
  $routeProvider
    .when('/login',{
      templateUrl: "login.html",
      controller: "loginController"
    })
	.when('/homePage', {
		templateUrl : 'homePage.html',
		controller : 'parentController'
	})
	.when('/pubsub', {
		templateUrl : 'pubsub.html',
		controller : 'pubsubController'
	})
	.otherwise({
        redirectTo:'/login'
    });
});
