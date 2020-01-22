const express = require('express')
const Route = express.Router()
const product = require('./routes/products')
const category = require('./routes/category')
const detailorder = require('./routes/detail_order')

Route
    .use('/products', product)
    .use('/category', category)
    .use('/order', detailorder)

module.exports = Route