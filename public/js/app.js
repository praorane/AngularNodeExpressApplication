// Declare app level module which depends on filters, and services
angular.module('angularNode', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index',
        controller: 'IndexCtrl'
      }).
      when('/addPost', {
        templateUrl: '/partials/addPost',
        controller: 'AddPostCtrl'
      })
    $locationProvider.html5Mode(true);
  }]);