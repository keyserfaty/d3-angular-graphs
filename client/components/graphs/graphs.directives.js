'use strict';

angular.module('graphs.directives', [])
  .directive('ghPie', ['d3Service', '$window', function (d3Service, $window) {
    return {
      restrict: 'E',
      scope: true,
      link: function (scope, element, attrs) {
        d3Service.d3().then(function (d3) {

          var colors = d3.scale.category20();

          var width = 300,
            height = 300,
            radius = 120,
            color = colors;

          var vis = d3.select(element[0])
            .append("svg:svg")
            .attr("width", width)
            .attr("height", height)
            .append("svg:g")
            .attr("transform", "translate(" + radius + "," + radius + ")");

          scope.$watch(function () {
            return angular.element($window)[0].innerWidth;
          }, function () {

            switch (attrs.data) {
            case 'stay':
              scope.render(scope.stay);
              break;
            case 'letgo':
              scope.render(scope.letgo);
              break;
            case 'approved':
              scope.render(scope.approved);
              break;
            }
          });

          scope.render = function (data) {
            if (!data) return;

            vis.data([data]);

            var arc = d3.svg.arc()
              .outerRadius(radius);

            var pie = d3.layout.pie()
              .value(function (d) {
                return d.percentage;
              });

            var arcs = vis.selectAll("g.slice")
              .data(pie)
              .enter()
              .append("svg:g")
              .attr("class", "slice");

            arcs.append("svg:path")
              .attr("fill", function (d, i) {
                return color(i);
              })
              .attr("d", arc);

            arcs.append("svg:text")
              .attr("transform", function (d) {
                d.innerRadius = 0;
                d.outerRadius = radius;
                return "translate(" + arc.centroid(d) + ")";
              })
              .attr("text-anchor", "middle")
              .text(function (d, i) {
                return data[i].label;
              });

            $('g.slice').tipsy({
              gravity: 'w',
              html: true,
              title: function () {
                var d = this.__data__,
                num = d.data.percentage;
                return d.data.label + ': ' + Math.round(num * 100) / 100 + '%';
              }
            });

          };

        });
      }
    }
}])

.directive('ghMap', ['d3Service', function (d3Service) {
  return {
    restrict: 'E',
    link: function (scope, elem, attrs) {
      d3Service.d3().then(function (d3) {

      });
    }
  }
}]);
