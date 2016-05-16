angular.module('starter.controllers', [])

.controller('QuestionsCtrl', function($scope,$stateParams,Chats) {
  console.log($stateParams.questionID);
   $scope.chat = Chats.get($stateParams.questionID);
})

.controller('FormCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

   $scope.chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
})
.controller('LoginCtrl',function($scope,$state){
    $scope.user={};
    $scope.login=function(){
        console.log("Login info: "+$scope.user);
        //$state.go('tab.form');
        $state.go('tab.form');
    };
});