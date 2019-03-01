'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = function(req, res, next) {
  Product.find({ }, 'title slug price')
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
};

exports.getBySlug = function(req, res, next) {
  Product.findOne({
    slug: req.params.slug,
    active: true // oly products actives
  }, 'title description price tag')
  .then(function(data) {
    res.status(200).send(data);
  })
  .catch(function(err) {
    res.status(400).send(err);
  })
};

exports.getById = function(req, res, next) {
  Product.findById(req.params.id, 'title description slug price')
  .then(function (data) {
    res.status(200).send(data);
  })
  .catch(function(err) {
    res.status(400).send(err);
  });
};

exports.getByTag = function(req, res, next) {
  Product.find({
    tag: req.params.tag, // as 'tag' is a array, the 'find' make a search in himself  
    active: true
  }, 'title descrition slug price tag')
  .then(function(data) {
    res.status(200).send(data);
  })
  .catch(function(err) {
    res.status(200).send(err);
  });
};

exports.post = function(req, res, next) {
  const product = new Product(req.body);
  product.save()
    .then(function(data) {
      res.status(201).send({ 
        message: 'Success build product!' 
      });
    })
    .catch(function(err) {
      res.status(400).send({ 
        message: 'Fail build product',
        data: err
      });
    });
};

exports.put = function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      slug: req.body.slug,
      price: req.body.price 
    }
  })
  .then(function(data) {
    res.status(200).send({
      message: 'Success update product!'
    });
  })
  .catch(function(err) {
    res.status(400).send({
      message: 'Fail update product!',
      data: err
    });
  });
};

exports.delete = function(req, res, next) {
  Product.findOneAndRemove(req.params.id)
  .then(function(data) {
    res.status(200).send({
      message: 'Success remove product!'
    });
  })
  .catch(function(err) {
    res.status(400).send({
      message: 'Fail remove product!',
      data: err
    });
  });
}; 