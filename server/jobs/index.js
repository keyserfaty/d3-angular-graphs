'use strict';

const
  tags = require('../services').parseTags(),
  Data = require('../model');

// updates db
tags.then(function (data) {
  Data.db.db.dropDatabase(function (err, result) {
    Data.insert(data, function (err, data) {
      if (err) console.log({
        'err': 'There has been an error adding collection to db.'
      });
      console.log('Collection added to db successfully');
    });
  });
});
