'use strict';

angular.module('GraphApp', [
  'ngRoute',
  'main.controller',
  'graphs.directives',
  'graphs.services',
  'edad.controller',
  'estadocivil.controller',
  'paises.controller',
  'provincias.controller'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
    .when("/provincias", {
      templateUrl: "partials/provincias/provincias.html",
      controller: "ProvCtrl"
    })
    .when("/paises", {
      templateUrl: "partials/paises/paises.html",
      controller: "PaisesCtrl"
    })
    .when("/edad", {
      templateUrl: "partials/edad/edad.html",
      controller: "EdadCtrl"
    })
    .when("/estadocivil", {
      templateUrl: "partials/estadocivil/estadocivil.html",
      controller: "EstCivilCtrl"
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
