'use strict';

const
	express = require('express'),
	app =  express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan');

const
	config = require('./config'),
	router = require('./routes'),
	db = require('./db.js'),
  services = require('./jobs');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(config.site.port, function() {
	console.log('Connected! Listening on port', config.site.port);
});
