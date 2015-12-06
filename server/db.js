'use strict';

const
	mongoose = require('mongoose'),
	config = require('./config');

try {
    mongoose.connect('mongodb://'+ config.mongodb.server +'/iamat', function (err, res) {
    	if (err) throw err;
    	console.log('Successfully connected to Mongodb');
    });
} catch (err) {
    console.log('Cannot stablish a connection with MongoDB');
    return;
}
