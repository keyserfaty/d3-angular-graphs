'use strict';

const
	express = require('express'),
	app =  express(),
	bodyParser = require('body-parser'),
	path = require('path'),
	morgan = require('morgan');

const
	config = require('./config'),
	router = require('./routes'),
	db = require('./db'),
	job = require('./jobs');

app.use(express.static(path.join(__dirname, '../client')));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(config.site.port, function() {
	console.log('Connected! Listening on port', config.site.port);
});
