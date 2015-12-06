'use strict';

const
  mongoose = require('mongoose');

const
  Tag = require('./model');

exports.list = function (req, res) {

  Tag.list().then(function (tags) {
    res.json(tags)
      .status(200).end();

  }, function (err) {
    res.json({
        'err': err,
        'details': 'No tags found'
      })
      .status(401).end();
  });
};
