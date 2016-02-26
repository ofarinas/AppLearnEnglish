mainAngular
.controller('daysController',['$scope',"listName","$ionicModal","firstDay",function($scope,listName,$ionicModal,firstDay){
  $scope.days=listName.getListDay();

  $ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })

  $scope.openModal = function() {
    $scope.wordSpanih="";
    $scope.modal.show()
  }

  $scope.closeModal = function(wordEnglish,wordSpanih) {
    firstDay.addWord(wordEnglish,wordSpanih);
    console.log(wordSpanih);
       $scope.modal.hide()

  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

$scope.ini=function(){
  $scope.wordEnglish=" ";
  $scope.wordSpanih=" ";
}

}])
.factory("listName",function(){
  return {
    getListDay:function(){
      return {"first day":"first_day","second day":"second_day","therd day":"third_day", "for day":"for_day", "five day":"five_day"};
      }
    }
  })

