'use strict';

angular.module('graphs.services', [])
  .factory('d3Service', ['$document', '$q', '$rootScope', function ($document, $q, $rootScope) {

    var d = $q.defer();

    function onScriptLoad() {
      $rootScope.$apply(function () {
        d.resolve(window.d3);
      });
    }

    var scriptTag = $document[0].createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = 'http://d3js.org/d3.v3.min.js';
    scriptTag.onreadystatechange = function () {
      if (this.readyState == 'complete') onScriptLoad();
    }
    scriptTag.onload = onScriptLoad;

    var s = $document[0].getElementsByTagName('body')[0];
    s.appendChild(scriptTag);

    return {
      d3: function () {
        return d.promise;
      }
    };

}])

.factory('parser', ['$q', function ($q) {

  var p = function (data, population) {
    var
      result = [],
      sum = 0;

    return $q(function (resolve, reject) {

      for (var i = 0; i <= 2; i++) {
        var each = [];
        angular.forEach(data, function (d) {
          angular.forEach(population, function (p) {
            if (d.name === p.name) {
              sum += d.percentage[i];
            }
          });
        });

        angular.forEach(data, function (d) {
          angular.forEach(population, function (p) {
            if (d.name === p.name) {
              var obj = {
                'label': p.display || p.name,
                'percentage': d.percentage[i] * 100 / sum
              };
              each.push(obj);
            }
          });
        });
        result.push(each);
      }

      resolve(result);
    });
  };

  return p;

}]);
