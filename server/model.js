'use strict';

const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const
  TagSchema = new Schema({
    name: { type: String },
    answers: { type: Array },
    key: { type: String },
    max: { type: Number },
    min: { type: Number },
    percentage: { type: Array },
    team: { type: Boolean },
    total: { type: Number }
  });

TagSchema.statics = {
  list: function () {
    return this.find().exec();
  },
  // bulk add
  insert: function (collection, callback) {
    return this.collection.insert(collection, callback);
  }
};

module.exports = mongoose.model('Tag', TagSchema);
