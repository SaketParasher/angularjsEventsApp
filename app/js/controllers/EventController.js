eventsApp.controller('eventDetailsController',function eventDetailsController($scope,EventDetailsService){

    $scope.sortOrder= 'name';

    $scope.events = [];
   /* EventDetailsService.getAllEvents(function(response,status,header,config){
        
        response.data.forEach(function(value){
            $scope.events.push(JSON.parse(value));    
        });
        
    },function(response,status,header,config){
        console.log('Error occured');
        console.log(response+'  '+status);
});*/

    console.log('All Data from resource service');
    console.log(EventDetailsService.getAllEventsResource());
    EventDetailsService.getAllEventsResource().$promise.then(function(result){
        for(prop in result){
            $scope.events.push(JSON.parse(result[prop] ));
        }
    },function(err){
        console.log('Promise Rejected');
    }).catch(function(err){
        console.log('Error from catch');
        console.log(err);
    });
     

    $scope.viewSession = function(event){
        var target = $(event.target);
        
        if(target.closest('a').hasClass('active')){
            
            target.closest('a').find('span.sessionspan').text('Hide Sessions');
        }else{
            target.closest('a').find('span.sessionspan').text('View Sessions');
        }
        
        target.parent('a').find('i').toggleClass('fa-chevron-up fa-chevron-down');
        target.closest('div.box').siblings('div.card').toggle("fast");        
    }

    $scope.upvoteSession = function(session){
        session.upVoteCount++;
    }
    $scope.downvoteSession = function(session){
        if(session.upVoteCount>0)
        session.upVoteCount--;
    }
});