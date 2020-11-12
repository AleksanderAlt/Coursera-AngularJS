(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('Controller1', Controller1)
  .controller('Controller2', Controller2)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  function Controller1(ShoppingListCheckOffService) {
    var ToBuyController = this;
  
    ToBuyController.getItems = function() {
      return ShoppingListCheckOffService.getItemsToBuy();
    };

    ToBuyController.isEmpty = function() {
      var count = (ToBuyController.getItems().length <= 0);
      return count;
    };

    ToBuyController.setBought = function(index) {
      return ShoppingListCheckOffService.setBought(index);
    };

    ToBuyController.addToList = function(new_qty, new_name) {
      ShoppingListCheckOffService.addToBuy(ToBuyController.new_qty, ToBuyController.new_name);
      ToBuyController.new_qty = "";
      ToBuyController.new_name = "";
    };
  }

  function Controller2(ShoppingListCheckOffService) {
    var AlreadyBoughtController = this;

    AlreadyBoughtController.getItems = function() {
      return ShoppingListCheckOffService.getItemsAlreadyBought();
    };

    AlreadyBoughtController.isEmpty = function() {
      var count = (AlreadyBoughtController.getItems().length <= 0);
      return count;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;
  
    var toBuy = [
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

    var bought = [];

    service.setBought = function(index) {
      var items = toBuy.splice(index, 1);
      bought.push(items[0]);
    };

    service.getItemsToBuy = function () {
      return toBuy;
    };

    service.getItemsAlreadyBought = function () {
      return bought;
    };
  }
  
})();
  