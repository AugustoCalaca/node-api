'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async function() {
  const res = await Product.find({ 
    active: true  
  }, 'title slug price');
  return res;
};

exports.getBySlug = async function(slug) {
  const res = await Product.findOne({
    slug: slug,
    active: true // only active products
  }, 'title description price tag');
  return res;
};

exports.getById = async function(id) {
  const res = await Product.findById(id, 'title description price slug tag');
  return res;
};

exports.getByTag = async function(tag) {
  const res = await Product.find({
    tag: tag,
    active: true
  }, 'title description slug price tag');
  return res;
};

exports.create = async function(data) {
  const product = new Product(data);
  await product.save();
};

exports.update = async function(id, data) {
  await Product.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      slug: data.slug,
      price: data.price
    } 
  });
};

exports.delete = async function(id) {
  await Product.findOneAndRemove(id);
};