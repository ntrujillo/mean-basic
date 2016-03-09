'use strict'
var express = require('express');
var controller = require('./user-ctrl');
var router = express.Router();

router.route('/')
.get(controller.getUser)
.put(controller.createUser);

module.exports = router;
