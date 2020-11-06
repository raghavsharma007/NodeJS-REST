const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/get', (req, res) => {
    res.send({method: 'GET'});
})

router.put('/put/:id', () => {
    res.send({method: 'PUT'});
})

router.post('/post', (req, res) => {
    // var user = new User(req.body);
    // user.save();
    User.create(req.body)
    .then((user) => {
        res.send(user);
    });
})


module.exports = router;