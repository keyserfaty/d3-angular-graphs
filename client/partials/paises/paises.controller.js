'use strict';

angular.module('paises.controller', [])
.controller('PaisesCtrl', ['$scope', 'parser', function ($scope, parser) {

  var status = [{
    name: 'Estados Unidos'
    }, {
    name: 'Chile'
    }, {
    name: 'Uruguay'
  }];

  parser($scope.data, status)
  .then(function (result) {
    $scope.stay = result[0];
    $scope.letgo = result[1];
    $scope.approved = result[2];
  });

}]);
