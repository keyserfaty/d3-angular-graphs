'use strict';

angular.module('main.controller', [])
  .controller('MainCtrl', ['$http', '$scope', '$location', function ($http, $scope, $location) {

    $http({
      method: 'GET',
      url: '/results'
    }).then(function successCallback(data) {
      $scope.data = data.data;
    }, function errorCallback(err) {
      console.log('There has been and error in GET /results');
    });

}]);
