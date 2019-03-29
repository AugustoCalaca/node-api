'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async function(data) {
  const res = await Order.find({})
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

exports.create = async function(data) {
  const order = new Order(data);
  await order.save();
}

