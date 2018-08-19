
eventsApp.factory('EventDetailsService',function EventDetailsService($http,$resource){

    return {
        getAllEvents:function(successCallBack,errorCallBack){
            
            $http({
                method:'GET',
                url:'/data/all'
            }).then(successCallBack,errorCallBack)
        },
        getAllEventsResource:function(){
            return $resource('/data/all').get();

        },
        getSingleEvent: function(eventId){
            return $resource('/data/:id',{id:'@id'}).get({id:eventId});
        },
        saveEvent:function(event){
            event.id=999;
            return $resource('/data/:id',{id:'@id'}).save(event);
        }
        
    }

});