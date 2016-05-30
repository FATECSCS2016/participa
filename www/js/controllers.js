angular.module('starter.controllers', [])

.controller('QuestionsCtrl', function($scope,$stateParams,Chats) {
  console.log($stateParams.questionID);
   $scope.chat = Chats.get($stateParams.questionID);
})

.controller('FormsCtrl', function($scope,Forms) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //})
  $scope.forms = Forms.all();
  $scope.loadForm=function(id){
    console.log(id);
  };
})
.controller('FormCtrl', function($scope,Forms,$stateParams) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //})
  $scope.form = Forms.get($stateParams.formID);
  console.log($scope.form);
})





.controller('LoginCtrl',function($scope,$state){
    $scope.user={};
    $scope.login=function(){
        console.log("Login info: "+$scope.user);
        //$state.go('tab.form');
        $state.go('tabTeacher.forms');
    };
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});