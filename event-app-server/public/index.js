const express = require('express');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('Welcome!');
});

module.exports = router;
