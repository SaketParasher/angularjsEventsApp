
eventsApp.controller('EditEventController',function EditEventController($scope,EventDetailsService){

    $scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){
            EventDetailsService.saveEvent(event).$promise.then(function(success){
                console.log('Data saved... ');
                console.log(success);
                
            },function(failure){
                console.log('Error while saving Data');
                console.log(failure);
            });
        }
    }
    $scope.cancelEdit = function(){
        window.location = '../views/Eventdetails.html';
    }
});