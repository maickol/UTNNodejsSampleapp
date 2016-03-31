var express = require('express');
var router = express.Router();
var storage = require('node-persist');

storage.initSync();

/* GET users listing. */
router.get('/', function(req, res, next) {
  storage.setItem('name','Maickol');
  console.log(storage.getItem('name'));
  res.send('Hello my friend: '+storage.getItem('name'));
});


module.exports = router;
