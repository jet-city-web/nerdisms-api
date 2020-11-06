'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const magnets = mongoose.Schema({
  word: { type: String, required: true },
  left: { type: String },
  top: { type: String },
});

module.exports = mongoose.model('magnets', magnets);
