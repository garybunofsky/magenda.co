var app = angular.module('application', []);

(function() {
  
  app.controller('mainController', 
    function ($scope){

    // Item List Arrays
    $scope.tasks = [];

    // Add a Item to the list
    $scope.add = function () {

        $scope.tasks.push({
            name: $scope.taskName,
            complete: false
        });

        // Clear input fields after push
        $scope.taskName = "";
    };
  });
})();
