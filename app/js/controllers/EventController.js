eventsApp.controller('eventDetailsController',function eventDetailsController($scope){

    $scope.sortOrder= 'name';
    $scope.events = [

        {
            "name": "Angular Boot Camp",
                        "id": 1,
                        "date": "1/1/2013",
                        "time": "10:30 am",
                        "location": {
                            "address": "Google Headquarters",
                            "city": "Mountain View",
                            "province": "CA"
                        },
                        "imageUrl": "http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png",
                        "sessions": [
                            {
                                "id": 1,
                                "name": "Directives Masterclass",
                                "creatorName": "Bob Smith",
                                "duration": 1,
                                "level": "Advanced",
                                "abstract": "In this session you will learn the ins and outs of directives!",
                                "upVoteCount": 0
                            },
                            {
                                "id": 2,
                                "name": "Scopes for fun and profit",
                                "creatorName": "John Doe",
                                "duration": 2,
                                "level": "Introductory",
                                "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                                "upVoteCount": 0
                            },
                            {
                                "id": 3,
                                "name": "Well Behaved Controllers",
                                "creatorName": "Jane Doe",
                                "duration": 4,
                                "level": "Intermediate",
                                "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                                "upVoteCount": 0
                            }
                        ]
        }

    ];

    $scope.viewSession = function(event){
        var target = $(event.target);
        
        if(target.closest('a').hasClass('active')){
            console.log('Insideee');
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