'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const repository = require('../repositories/customer-repository');

exports.post = async function(req, res) {
  try {
    await repository.create(req.body);
    res.status(200).send({
      message: 'Success register customer!'
    });
  } catch(err) {
    res.status(400).send({
      message: 'Fail register customer!'
    })
  }
}