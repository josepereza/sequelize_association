var express = require('express');
var router = express.Router();
const Cliente=require('../models').Cliente
const Task=require('../models').Task

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get( "/list", (req, res) =>{
    
  Cliente.findAll().then( (result) => res.json(result))
      
});
router.get("/Task",(req,res)=>{
Task.findAll({
  include: [{
      model: Cliente
     
  }]
}).then((result)=> res.json(result))
});


module.exports = router;
