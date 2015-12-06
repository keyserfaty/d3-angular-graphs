'use strict';

Array.prototype.maximum = function () {
  return this.reduce(function (max, aValue) {
    return Math.max(max, aValue);
  }, this[0]);
};
Array.prototype.minimum = function () {
  return this.reduce(function (min, aValue) {
    return Math.min(min, aValue);
  }, this[0]);
};
Array.prototype.sum = function () {
  return this.reduce(function (total, aValue) {
    return total + Number(aValue);
  });
};
