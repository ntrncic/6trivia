angular.module('6TRIVIA', [
  'ngRoute',
  'mobile-angular-ui',
  '6TRIVIA.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});