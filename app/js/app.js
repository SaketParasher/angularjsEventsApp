

var eventsApp = angular.module('eventsApp',['ngResource','ngRoute'])
                .config(function($routeProvider,$locationProvider){
                    $routeProvider.when('/newEvent',
                    {
                        templateUrl:'./views/templates/NewEvent.html',
                        controller:'EditEventController'

                    });
                    $routeProvider.when('/events',
                    {
                        templateUrl:'./views/templates/AllEvents.html',
                        controller:'eventDetailsController'
                    });
                
                    $routeProvider.when('/events/:eventId',
                    {
                        foo:'FooValue',
                        templateUrl:'./views/templates/EventDetails.html',
                        controller:'SingleEventController'
                    });
                    
                    $routeProvider.otherwise({redirectTo:'/events'});
                    $locationProvider.html5Mode(true);
                })