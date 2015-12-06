'use strict';

const
  express = require('express'),
	path = require('path'),
  router = express.Router();

const
  controller = require('./controller');

router.get('/results', controller.list);
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = router;
