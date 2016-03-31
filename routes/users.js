var express = require('express');
var storage = require('node-persist');
var router = express.Router();

storage.initSync();

/* GET users listing. */
router.get('/', function(req, res) {
    if (storage.getItem('users')) {
        res.status('200').json(storage.getItem('users'));
    }else{
        res.status('200').json({});
    }
});

/* GET users listing. */
router.get('/:username', function(req, res) {
    if (storage.getItem('users')) {

        var users = storage.getItem('users');

        var username = req.params.username;

        var user = users.find(function(element) {
            return element.username === username;
        });

        res.status('200').json(user);
    }else{
        res.status('200').json({});
    }
});

router.post('/', function(req, res) {

    var users = storage.getItem('users');

    if(!users){
        users = [];
    }

    users.push(req.body.user);

    storage.setItem('users',users);

    res.status('201').json({status: "Created"});
});

module.exports = router;
