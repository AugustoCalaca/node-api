'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send({
    title: 'node api',
    version: '0.0.5'
  });
});

module.exports = router;