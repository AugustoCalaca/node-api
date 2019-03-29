'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

const indexRoute = require('./routes/index-route'); // load routes
const productRoute = require('./routes/product-route'); // load product routes
const customerRoute = require('./routes/customer-route'); // load customer routes
const orderRoute = require('./routes/order-route'); // load order routes

const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://augustocalaca:136953mongodb!@node-test-kipz3.mongodb.net/test');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;