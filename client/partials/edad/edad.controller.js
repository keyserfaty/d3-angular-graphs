'use strict';

angular.module('edad.controller', [])
  .controller('EdadCtrl', ['$scope', 'parser', function ($scope, parser) {

    var status = [{
      name: 'EDAD_31a41',
      display: 'De 31 a 41'
    }, {
      name: 'EDAD_21a30',
      display: 'De 21 a 30'
    }, {
      name: 'EDAD_Menor18',
      display: 'Menor de 18'
    }, {
      name: 'EDAD_18a21',
      display: 'De 18 a 21'
    }, {
      name: 'EDAD_62a100',
      display: 'De 62 a 100'
    }, {
      name: 'EDAD_52a61',
      display: 'De 52 a 61'
    }, {
      name: 'EDAD_42a51',
      display: 'De 42 a 51'
    }];

    parser($scope.data, status)
      .then(function (result) {
        $scope.stay = result[0];
        $scope.letgo = result[1];
        $scope.approved = result[2];
      });

}]);
