var express = require('express');
var router = express.Router();
var Penguin = require('../models/penguin');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});


//1. Get request GET ALL PENGUINS
router.get('/penguins', function(req, res, next) {
 Penguin.find(function (err, data) {
   if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});

//2. Get request GET single PENGUINS
router.get('/penguin/:id', function(req, res, next) {
 Penguin.findById(req.params.id, function (err, data){
    if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});


//3. POST request POST ALL PENGUINS
router.post('/penguins', function(req, res, next) {
 newPenguin = new Penguin ({
   name: req.body.name,
   zoo: req.body.zoo,
   nemesis: req.body.nemesis
 });
 newPenguin.save(function (err, data) {
     if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});

//4. Put request PUT single  PENGUINS
router.put('/penguin/:id', function(req, res, next) {
 var update = {
   name:req.body.name,
   zoo: req.body.zoo,
   nemesis: req.body.nemesis
 };
 Penguin.findByIdAndUpdate(req.params.id, update, function (err, data){
       if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});


//5. DELETE request single  PENGUINS
router.delete('/penguin/:id', function(req, res, next) {
 Penguin.findByIdAndRemove(req.params.id, function (err, data){
     if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});


module.exports = router;
