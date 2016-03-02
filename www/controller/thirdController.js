mainAngular
  .controller('thirdDayController',["$scope","thirdDay","forDay","firstDay","$ionicModal","$ionicPopup",function($scope,thirdDay,forDay,firstDay,$ionicModal,$ionicPopup){
    $scope.words=thirdDay.getListDay();
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
        thirdDay.removeWord(wordEnglish);
        forDay.addWord(wordEnglish,wordSpanish);
        $scope.modal.remove();
      },
      $scope.cameFirstDay=function(wordEnglish,wordSpanish){
        thirdDay.removeWord(wordEnglish);
        firstDay.addWord(wordEnglish,wordSpanish);

      },

      $scope.closeModal = function(wordEnglish,wordSpanih) {
        thirdDay.removeWord(wordEnglish);
        firstDay.addWord(wordEnglish,wordSpanih);
        $scope.modal.remove();
      };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });


  }])

