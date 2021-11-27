var express = require('express');
var router = express.Router();
const User = require('../models/User')
const Todo = require('../models/Todo')

router.get('/', async function(req, res, next) {
    const users = await User.find().exec()
    return res.status(200).json({"users": users})
});

router.get('/:id', async function(req, res, next) {
    
    const todos = await Todo.find().where('author').equals(req.params.id).exec()
    return res.status(200).json({"todos": todos})
});

module.exports = router;