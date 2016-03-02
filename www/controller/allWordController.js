mainAngular
  .controller('allWordController',["$scope","allDay",function($scope,allDay){
   $scope.list=     allDay.getListDay();
  }]);
