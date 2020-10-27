(function () {
  'use strict';
  
  var toBuyList = [
    {
      name: "oranges",
      quantity: "2"
    },
    {
      name: "donuts",
      quantity: "200"
    },
    {
      name: "cookies",
      quantity: "300"
    },
    {
      name: "bananas",
      quantity: "5"
    },
    {
      name: "fish",
      quantity: "4"
    }
  ];
  
  var boughtList = [

  ];
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);
  
  ToBuyController.$inject = ['$scope'];
  function ToBuyController($scope) {
    $scope.toBuyList = toBuyList;
  
    $scope.addToBoughtList = function () {
      var boughtItem = {
        name: $scope.boughtItemName,
        quantity: $scope.boughtItemQuantity
      };
  
      $scope.boughtList.push(boughtItem);
    };
  }

  AlreadyBoughtController.$inject = ['$scope'];
  function AlreadyBoughtController($scope) {
    $scope.boughtList = boughtList;

  }
  
  })();
  