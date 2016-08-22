angular.module('HigherMarketBlog')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'BlogIndexCtrl'
      })
      .when('/blogs/:id', { 
        templateUrl: 'templates/showTemplate.html',
        controller: 'BlogShowCtrl'
      });
});

angular.module('HigherMarketBlog')
 .factory('BlogService', function($resource){
    return $resource('http://localhost:3000/api/blogs/:id') ;
});

angular.module('HigherMarketBlog')
  .controller('BlogIndexCtrl', function($scope, BlogService){
    $scope.blogs= BlogService.query();
    console.log($scope.blogs);
});

angular.module('HigherMarketBlog')
  .controller('BlogShowCtrl', function ($scope, BlogService, $routeParams) {
   $scope.blog = BlogService.get({id: $routeParams.id});
   console.log($scope.blog);
});

angular.module('HigherMarketBlog')
  .controller('BlogCreateCtrl', function($scope, BlogService) {
    $scope.newBlog = {};
    $scope.submit = function() {
      BlogService.save($scope.newBlog);
      window.location.assign('/');
    };
});
