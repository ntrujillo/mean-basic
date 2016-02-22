'use strict'
var express = require('express');
var controller = require('./detail-ctrl');
var router = express.Router();

router.route('/')
.get(controller.queryDetails)
.post(controller.createDetail);

router.route('/search').get(controller.search);

router.route('/:id')
.get(controller.getDetail);

module.exports = router;

