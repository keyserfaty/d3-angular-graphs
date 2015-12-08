'use strict';

angular.module('estadocivil.controller', [])
  .controller('EstCivilCtrl', ['$scope', 'parser', function ($scope, parser) {

    var status = [{
      name: 'ESTADO_CASADO',
      display: 'Casado'
      }, {
      name: 'ESTADO_Viudo',
      display: 'Viudo'
      }, {
      name: 'ESTADO_SOLTERO',
      display: 'Soltero'
      }, {
      name: 'ESTADO_Divorciado',
      display: 'Divorciado'
      }, {
      name: 'ESTADO_Concubinato',
      display: 'En concubinato'
    }];

    parser($scope.data, status)
    .then(function (result) {
      $scope.stay = result[0];
      $scope.letgo = result[1];
      $scope.approved = result[2];
    });

}]);
