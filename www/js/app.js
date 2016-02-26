// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mainAngular=angular.module('starter', ['ionic']);
mainAngular
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("listDay",{url:"/",templateUrl:"view/listDay.html",controller:"daysController"})
      .state("first_day",{url:"view/first_day",templateUrl:"view/listWord.html",controller:"firstDayController"})
      .state("second_day",{url:"view/second_day",templateUrl:"view/listWord.html",controller:"secondDayController"})
      .state("third_day",{url:"view/third_day",templateUrl:"view/listWord.html",controller:"thirdDayController"})
      .state("for_day",{url:"view/third_day",templateUrl:"view/listWord.html",controller:"forDayController"})
      .state("five_day",{url:"view/third_day",templateUrl:"view/listWord.html",controller:"fiveDayController"})
    $urlRouterProvider.otherwise("/")


  })

