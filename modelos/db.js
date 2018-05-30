'use strict';
const mongoose = require('mongoose');
const conn = require("../db/dbcon");
const Schema = mongoose.Schema;

const Schemas_T = new mongoose.Schema({
  name: {type: String},
  Created_date: {type: String},
  status: {type: String}
});

module.exports = mongoose.model('Tasks', Schemas_T, 'Tasks');
