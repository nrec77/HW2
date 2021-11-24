var express = require('express');
var router = express.Router();
const User = require('../models/User')


router.get('/', async function(req, res, next) {
    const users = await User.find().exec()
    return res.status(200).json({"users": users})
});

module.exports = router;