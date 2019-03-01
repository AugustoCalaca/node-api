'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true // remove space left and right of string
  },
  slug: {
    type: String,
    required: true,
    index: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  tag: [{
    type: String,
    required: true
  }]
});

module.exports = mongoose.model('Product', schema);