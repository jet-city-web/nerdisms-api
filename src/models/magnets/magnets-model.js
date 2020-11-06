'use strict';

const Model = require('../mongo.js');
const schema = require('./magnets-schema.js');

class Magnets extends Model {
  constructor() { super(schema); }
}

module.exports = new Magnets();
