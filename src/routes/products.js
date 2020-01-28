const express = require('express')
const Route = express.Router()
const { authorization } = require('../middleware/auth')

const { getProducts, createProducts, editProducts,
    deleteProducts, findProducts } = require('../controller/products')
const { fileFilter } = require('../middleware/pictures')

Route

    .get('/', findProducts)
    .post('/', fileFilter('image'), createProducts)
    .put('/:id', fileFilter('image'), editProducts)
    .delete('/:id', deleteProducts)

module.exports = Route