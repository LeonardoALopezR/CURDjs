const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const conn = mongoose.connect('mongodb://localhost/app'); 

module.exports = conn;