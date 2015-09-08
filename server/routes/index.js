var express = require('express');
var router = express.Router();
var Penguin = require('../models/penguin');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});


//1. Get request GET ALL PENGUINS - goes into the database and finds all the data that matches the penguin schema
router.get('/penguins', function(req, res, next) {
 Penguin.find(function (err, data) {
   if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});

//2. Get request GET single PENGUINS - finds a specific penguin by the unique id
router.get('/penguin/:id', function(req, res, next) {
 Penguin.findById(req.params.id, function (err, data){
    if (err) {
     res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});


//3. POST request POST ALL PENGUINS -creates a new penguin and adds it to the database
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

//4. Put request PUT single  PENGUINS - changes some value of a specific penguin in the database
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


//5. DELETE request single  PENGUINS finds a penguin by its unique id and deletes it from the database
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
