'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const isms = mongoose.Schema({
  category: { type: String, required: true, enum: ['devs', 'mathletes', 'gamers', 'scientists'] },
  text: { type: String },
  url: { type: String },
  contributor: { type: String },
  source: { type: String },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model('isms', isms);
