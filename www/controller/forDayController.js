mainAngular
  .controller('forDayController',["$scope","forDay","fiveDay","firstDay","$ionicModal",function($scope,forDay,fiveDay,firstDay,$ionicModal){
    $scope.words=forDay.getListDay();
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
        forDay.removeWord(wordEnglish);
        fiveDay.addWord(wordEnglish,wordSpanish);
        $scope.modal.remove();
      },

      $scope.closeModal = function(wordEnglish,wordSpanih) {
        forDay.removeWord(wordEnglish);
        firstDay.addWord(wordEnglish,wordSpanih);
        $scope.modal.remove();

      };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
  }])

