const express = require('express');
const router = express.Router();
var {hola, hola2}= require('../controllers/archivo');
var {list,crt,rd,up,dlt} = require('../controllers/curd');

router
  .get('/', hola, hola2)
  .get('/tasks', list)
  .post('/tasks', crt)
  .get('/tasks/:taskId',rd)
  .put('/tasks/:taskId',up)
  .delete('/tasks/:taskId',dlt);
// .get('/', function(req, res){
//   res.send('hola')
// });

  

module.exports = router;


// 'use strict';
// module.exports = function(app) {
//   var todoList = require('../controllers/todoListController');

//   // todoList Routes
//   app.route('/tasks')
//     .get(todoList.list_all_tasks)
//     .post(todoList.create_a_task);


//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
// };
