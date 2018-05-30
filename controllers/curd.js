const mongoose = require('mongoose');
const Task = require('../modelos/db');

exports.list = (req, res) => {
  Task.find({}, (err, task)=> {
    if (err){
      res.send(err);
    }
    else{
    res.json(task);
    }
  });
};

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
  
