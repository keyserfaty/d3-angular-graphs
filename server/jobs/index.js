'use strict';

const
  CronJob = require('cron').CronJob;

const
  tags = require('../services').parseTags(),
  Data = require('../model');

// runs on the first day of every month
var job = new CronJob('0 22 * * *', function () {
  tags.then(function (data) {
    Data.insert(data, function (err, data) {
      if (err) console.log({ 'err': 'There has been an error adding collection to db.' });
      console.log('Collection added to db successfully');
    });
  });

  }, function () {
    console.log({ 'err': 'There has been an error updating the DB' })
  },
  true
);

// first time fullfilling the db
// tags.then(function (data) {
//   Data.insert(data, function (err, data) {
//     if (err) console.log({ 'err': 'There has been an error adding collection to db.' });
//     console.log('Collection added to db successfully');
//   });
// });
