'use strict';

// Declare app level module which depends on filters, and services
var eventsApp = angular.module('eventsApp', ['ngRoute']);

eventsApp.config(function ($routeProvider) {
  $routeProvider
    .when('/new',{
      templateUrl: "templates/NewEvent.html",
      controller: "editEventController"
    })
	.when('/details/:eventId', {
		templateUrl : 'templates/EventDetails.html',
		controller : 'eventsController'
	}).when('/details', {
		templateUrl : 'templates/EventDetails.html',
		controller : 'eventsController'
	}).when('/anything', {
		template : '<b>Hello WOrld </>',
		controller : 'eventsController'
	})
	.otherwise({
        redirectTo:'/details'
    });
});
