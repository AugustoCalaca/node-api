'use strict';

const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const route = router.get('/', function(req, res, next) {
  res.status(200).send({
    title: 'node api',
    version: '0.0.1'
  });
});

const create = router.post('/', function(req, res, next) {
  res.status(201).send(req.body); // body of request
});

const put = router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body
  });
});

const del = router.delete('/', function(req, res, next) {
  res.status(200).send(req.body);
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;