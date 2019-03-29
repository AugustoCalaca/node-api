'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async function(req, res) {
  try {
    const data = await repository.get();  
    res.status(201).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Fail your request!'
    });
  }
}

exports.post = async function(req, res) {
  try {
    await repository.create({
      number: guid.raw().substring(0, 6),
      customer: req.body.customer,
      items: req.body.items
    });
    res.status(201).send({
      message: 'Success register order!'
    });
  } catch(err) {
    res.status(500).send({
      message: 'Fail register order!',
      error: err
    });
  }
}