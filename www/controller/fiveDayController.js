mainAngular
  .controller('fiveDayController',["$scope","fiveDay","$ionicModal","$ionicPopup","$location",function($scope,fiveDay,$ionicModal,$ionicPopup,$location){
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
        $scope.modal.hidden();
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
      });
      alertPopup.then(function(res) {
        //$location.path("view/third_day");
      });
    };
  }])

