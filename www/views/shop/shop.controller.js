(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'康颖超',
        ab:'',
        name1:'康颖超',
        phone:'15659793801',
        phone1:'15659793801',
        createTime:'2017-10-1 15:30:00',
        email:'863338066@qq.com',
        hylx:'111'
      });
    });
  }])
})();
