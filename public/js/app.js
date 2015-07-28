var app = angular.module('application', []);

(function() {
  app.controller('mainController', 
  function ($scope){
    // item list arrays blank
    $scope.tasks = [];

    // add an item to the list
    $scope.add = function () {
      $scope.tasks.push({
        name: $scope.taskName,
        complete: false
      });
      
      // clear input fields after push
      $scope.taskName = "";
    };
  });
})();
