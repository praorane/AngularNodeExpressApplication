
angular.module('angularNode').controller('mainController', function ($scope) {
  $scope.PageTitle = "Angular and Nodejs Application";
});

angular.module('angularNode').controller('IndexCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/api/getPosts').success(function(data) {
           $scope.posts = data.posts;
        });
    });
angular.module('angularNode').controller('AddPostCtrl', function ($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('http://localhost:3000/api/addPost', $scope.form).
      success(function(data) {
        $location.path('/');
    });
  };
});

