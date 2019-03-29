'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');

exports.get = async function(req, res, next) {
  try {
    const data = await repository.get();
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({ 
      message: 'Fail your request'
    });
  }
};

exports.getBySlug = async function(req, res, next) {
  try {
    const data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch(err) {
    res.status(500).send({
      message: 'Fail your request'
    });
  }
};

exports.getById = async function(req, res, next) {
  try {
    const data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch(err) {
    res.status(400).send({
      message: 'Fail your request'
    });
  }
};

exports.getByTag = async function(req, res, next) {
  try {
    const data = await repository.getByTag(req.params.tag);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({
      message: 'Fail your request'
    });
  }
};

exports.post = async function(req, res, next) {
  try {
    await repository.create(req.body);
    res.status(201).send({
      message: 'Success build product!'
    });
  } catch(err) {
    res.status(400).send({
      message: 'Fail build product!'
    });
  }
};

exports.put = async function(req, res, next) {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: 'Success update product!'
    });
  } catch(err) {
    res.status(400).send({
      message: 'Fail update product!'
    })
  }
};

// bug in delete
exports.delete = async function(req, res, next) {
  try {
    await repository.delete(req.params.id);
    res.status(200).send({
      message: 'Success remove product!'
    });
  } catch(err) {
    res.status(400).send({
      message: 'Fail remove product!',
      error: err
    });
  }
}; 