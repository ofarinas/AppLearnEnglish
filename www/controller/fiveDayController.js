mainAngular
  .controller('fiveDayController',["$scope","fiveDay","firstDay","allDay","$ionicModal","$ionicPopup","$location",function($scope,fiveDay,firstDay,allDay,$ionicModal,$ionicPopup,$location){
    $scope.words=fiveDay.getListDay();

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
      $scope.visibilityButton = false;
      $scope.visibilityText = true;

      $scope.closeModal = function(wordEnglish,wordSpanih) {
        fiveDay.removeWord(wordEnglish);
        firstDay.addWord(wordEnglish,wordSpanih);
        $scope.modal.remove();
      };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    $scope.removeWord = function(word,translate) {
      fiveDay.removeWord(word);
      $scope.modal.remove();
      var alertPopup = $ionicPopup.alert({
        title: 'Congratulation',
        template: 'You have lernt one word :)'
      }).then(allDay.addWord(word,translate)
        );
      alertPopup.then(function(res) {
        //$location.path("view/third_day");
      });
    };
  }])

