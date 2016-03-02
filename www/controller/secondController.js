mainAngular
  .controller('secondDayController',["$scope","secondDay","thirdDay","firstDay","$ionicModal",function($scope,secondDay,thirdDay,firstDay,$ionicModal){
    $scope.words=secondDay.getListDay();
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
        secondDay.removeWord(wordEnglish);
        thirdDay.addWord(wordEnglish,wordSpanish);
        $scope.modal.remove();
      },

      $scope.closeModal = function(wordEnglish,wordSpanish) {
        secondDay.removeWord(wordEnglish);
        firstDay.addWord(wordEnglish,wordSpanish);
        $scope.modal.hide();
      };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
  }])

