const express = require('express')
const Route = express.Router()
const product = require('./routes/products')
const category = require('./routes/category')
const detailorder = require('./routes/detail_order')
const User = require('./routes/auth')

Route
    .use('/products', product)
    .use('/category', category)
    .use('/order', detailorder)
    .use('/user', User)

module.exports = Route