'use strict';

const Model = require('../mongo.js');
const schema = require('./isms-schema.js');

class Isms extends Model {
  constructor() { super(schema); }
}

module.exports = new Isms();
