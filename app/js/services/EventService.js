
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
        getSingleEvent: function(){
            return $resource('/data/:id',{id:'@id'}).get({id:1});
        },
        saveEvent:function(event){
            event.id=999;
            return $resource('/data/:id',{id:'@id'}).save(event);
        }
        
    }

});