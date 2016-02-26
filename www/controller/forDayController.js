mainAngular
  .controller('forDayController',["$scope","forDay","fiveDay","$ionicModal",function($scope,forDay,fiveDay,$ionicModal){
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
        console.log(wordSpanih);
        $scope.modal.hide();

      };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
  }])

