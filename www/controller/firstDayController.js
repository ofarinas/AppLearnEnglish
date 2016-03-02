mainAngular
  .controller('firstDayController',["$scope","firstDay","secondDay","$ionicModal",function($scope,firstDay,secondDay,$ionicModal){
   $scope.words=firstDay.getListDay();
    $scope.visibilityButton = true;
    $scope.visibilityText = false;
    $ionicModal.fromTemplateUrl('contact-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal
    }),

    $scope.openModal = function(word,translate) {
      $scope.wordEnglish=word;
      $scope.wordSpanih=translate;
      $scope.modal.show()
    },
    $scope.removeWord = function(wordEnglish,wordSpanish) {
      firstDay.removeWord(wordEnglish);
      secondDay.addWord(wordEnglish,wordSpanish);
      $scope.modal.remove();
    },

    $scope.closeModal = function(wordEnglish,wordSpanih) {
      $scope.modal.hide();

    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
}])
