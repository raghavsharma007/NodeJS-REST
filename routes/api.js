const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/get', (req, res, next) => {
    res.send({method: 'GET'});
})

router.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id})
    .then((user) => {
        res.send(user);
    })
})

router.put('/put/:id', (req, res, next) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        User.findOne({_id: req.params.id})
        .then((user) => {
            res.send(user);
        })
    })
})

router.post('/post', (req, res, next) => {
    // var user = new User(req.body);
    // user.save();
    User.create(req.body)
    .then((user) => {
        res.send(user);
    }).catch(next);
})


module.exports = router;