'use strict';

eventsApp.controller('eventsController', function ($scope) {
   // console.log($scope);   
    $scope.sortOrder = "voteCount";
    $scope.event = {
        name: "AngulajJS Training",
        date: "10 - Jul -2015",
        time: "2:00 PM",
        address: {
            confRoom: "Santiniketal",
            extention: "5303"
        },
        topics: [
            {
                title: "Introduction to Angular",
                author: "Sudhir Sharma",
                duration: 1,
                voteCount: 0
            }
                ,
            {
                title: "Directives", 
                author: "Sudhir Sharma", 
                duration: 2,
                voteCount: 0
            }
                ,
            {
                title: "filter", 
                author: "Devendra Zala", 
                duration: 3,
                voteCount: 0
            }
                ,
            {
                title: "Directives", 
                author: "Jwalin Shah", 
                duration: 4,
                voteCount: 0
            }
            ]
    };
    
    $scope.increaseVote = function(t){
        t.voteCount = t.voteCount +1;
    };
    
    $scope.decreaseVote = function(t){
        t.voteCount = t.voteCount -1;
    };
    
});
