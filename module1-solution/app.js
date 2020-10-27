(function () {
'use strict';
    
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.colorText = false;
    
    $scope.CheckIfTooMuch = function () {
        var dishCount = $scope.dishes.split(",").filter($scope.isNotEmpty).length; //will not consider and empty item
        if (dishCount == 0) {
            $scope.message = "Please enter data first";
            $scope.colorText = "red";
            $scope.borderColorText = "red";
        }
        else if (dishCount >= 0 && dishCount <= 3) {
          $scope.message = "Enjoy!";
          $scope.colorText = "green";
          $scope.borderColorText = "green";
        }
        else {
          $scope.message = "Too much!";
          $scope.colorText = "green";
          $scope.borderColorText = "green";
        }
    };

    $scope.isNotEmpty = function (value) {
        return (value == "") ? false : true;
    };

};
    

})();