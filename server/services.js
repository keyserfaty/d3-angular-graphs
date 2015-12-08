'use strict';

const
  request = require('request');

const
  config = require('./config').teams,
  tools = require('./tools'),
  results = require('./jobs/results.json');

const
  host = config.host,
  atcode = config.atcode;


// returns userTags parsed with names changes
exports.parseTags = function () {

  return new Promise(function (resolve, reject) {
    var teamsData = [], tags = [];

    getTeams().then(function (data) {

      if (data.hasOwnProperty('teams')) {
        teamsData.push(data.teams);
      }
      
      teamsData = teamsData[0];

      Object.keys(results.userTags).forEach(function (key) {

        var temp = results.userTags[key];

        temp.key = key;
        temp.team = false;

        var name = key;
        // console.log(name);

        if (key.indexOf("team-") > -1) {
          temp.team = true;

          var temp2 = key.replace("room:team-", "");
          for (var i = teamsData.length - 1; i >= 0; i--) {

            if (teamsData[i]._id == temp2) {
              name = teamsData[i].name;
              break;
            }
          };
        }

        temp.name = name.replace("room:", "");

        temp.total = temp.answers.sum();
        temp.max = temp.answers.maximum();
        temp.min = temp.answers.minimum();

        tags.push(temp);
      });

      resolve(tags);
    });

  }, function (err) {
    console.log(err);
  });

};

// brings teams from api
var getTeams = function () {
  return new Promise(function (resolve, reject) {
    request.get(host + '/atcodes/' + atcode + '/teams/', function (err, res, data) {
      if (err) return reject(err);
      return resolve(JSON.parse(data));
    });
  });
};


// returns titles from json
var getTitles = function () {
  var
    titles = ['id', 'question', 'answers', 'timing', 'type'],
    result = [];

  titles.map(function (key, i) {
    if (results.hasOwnProperty(key)) {
      var obj = {};
      obj[key] = results[key];

      result.push(obj);
    };
  });

  return result;

};
