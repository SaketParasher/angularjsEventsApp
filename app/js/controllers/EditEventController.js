
eventsApp.controller('EditEventController',function EditEventController($scope){

    $scope.saveEvent = function(event,newEventForm){
        if(newEventForm.$valid){
            console.log(event.name +' event saved');
        }
    }
    $scope.cancelEdit = function(){
        window.location = '../views/Eventdetails.html';
    }
});