'use strict';

angular.module('provincias.controller', [])
  .controller('ProvCtrl', ['$scope', 'parser', function ($scope, parser) {

    var status = [{
      name: 'San Luis',
    }, {
      name: 'La Rioja',
    }, {
      name: 'Formosa',
    }, {
      name: 'Santiago del Estero',
    }, {
      name: 'Salta',
    }, {
      name: 'Tierra del Fuego',
    }, {
      name: 'Corrientes',
    }, {
      name: 'Buenos Aires',
    }, {
      name: 'Chaco',
    }, {
      name: 'Chubut',
    }, {
      name: 'Jujuy',
    }, {
      name: 'Neuquen',
    }, {
      name: 'San Juan',
    }, {
      name: 'Catamarca',
    }, {
      name: 'Río Negro',
    }, {
      name: 'Entre Ríos',
    }, {
      name: 'Córdoba',
    }, {
      name: 'Mendoza',
    }, {
      name: 'Ciudad de Buenos Aires',
    }, {
      name: 'La Pampa',
    }, {
      name: 'Santa Fe',
    }, {
      name: 'Santa Cruz',
  }];

    parser($scope.data, status)
      .then(function (result) {
        $scope.stay = result[0];
        $scope.letgo = result[1];
        $scope.approved = result[2];
      });

}]);
