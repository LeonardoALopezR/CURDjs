//const user = require('../models/db');

exports.hola = (req, res, next) =>{
    // res.send('hola');
    next();
};
exports.hola2 = (req, res, next) =>{
    res.send('hola2');
};
// function hola(req, res, next){
//     res.send('hola');
// }
//
// module.exports = {hola}
