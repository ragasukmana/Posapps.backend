const express = require('express')
const Route = express.Router()

const {getOrder, createOrder, deleteOrder, getPostOrder} = require('../controller/detail_order')

Route
    .get('/', getOrder)
    .get('/postorder', getPostOrder)
    .post('/', createOrder)
    .delete('/:id', deleteOrder)

    module.exports = Route