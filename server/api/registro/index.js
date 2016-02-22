'use strict'
var express = require('express');
var controller = require('./registro-ctrl');
var router = express.Router();

router.route('/')
.get(controller.queryRegistros)
.post(controller.createRegistro);

router.route('/:id')
.get(controller.getRegistro)
.delete(controller.deleteRegistro);

router.route('/search').get(controller.search);

module.exports = router;

