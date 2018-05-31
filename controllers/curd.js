const mongoose = require('mongoose');
const Task = require('../modelos/db');
const request = require('request');
let url = 'http://localhost:5000'
		console.log("url --", url)

exports.list = (req,res)=>{
request.get(url , (err, response, body) => {
  if (!err) {
    console.log(response.statusCode);
    if (response.statusCode == 200) {
      console.log('Entro');
      Task.find({}, (err, task)=> {
            if (err){
              res.send(err);
            }
            else{
            res.json(task);
            }
          });

    } else {
      res.status(response.statusCode).send(JSON.parse(body))
    }
  } else {
    res.status(500).send({
        status: 500, name: 'internalError', message: 'Ocurrio un error interno'
      })
  }
})
}

exports.crt = (req, res) => {
    var new_task = new Task(req.body);
    new_task.save((err, task)=> {
      if (err){
        res.send(err);
      }
      else{
      res.json(task);
      }
    });
  };

  exports.rd = (req, res)=>{
    Task.findById(req.params.taskId, (err, task)=>{
      if (err){
        res.send(err);
      }
      else{
      res.json(task);
      }
    });
  };
  
  
  exports.up = (req, res)=> {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task)=> {
      if (err){
        res.send(err);
      }
      else{
      res.json(task);
      }
    });
  };
  
  
  exports.dlt = (req, res)=> {
    Task.remove({
      _id: req.params.taskId
    }, (err, task)=>{
      if (err){
        res.send(err);
      }
      else{
      res.json({ message: 'Task successfully deleted' });
      }
    });
  };
  
