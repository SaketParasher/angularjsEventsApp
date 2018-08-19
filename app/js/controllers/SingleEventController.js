
eventsApp.controller('SingleEventController',function SingleEventController($scope,$routeParams,$route,EventDetailsService){

    $scope.event = EventDetailsService.getSingleEvent($routeParams.eventId);

    console.log($route.current.foo); // foo is custom property defined on route
    console.log($route.current.params.foo) // it give us access to both query string parameters and parameters on route
    console.log($route.current.params.eventId);// above foo is passed in query string & here eventId is accessed from route.
    console.log($route.current.pathParams.eventId)// pathParams can be used only to access parameters on route not on query string.

});