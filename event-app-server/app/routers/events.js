// require('../models/events.model');
const controller = require('../controllers/events.controller');
const express = require('express');
const router = require('express').Router();

/* TODO: use api docs */
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete( "/:id", controller.remove);
router.get( "/", controller.getAll);

module.exports = router;
