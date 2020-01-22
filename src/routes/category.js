const express = require('express')
const Route = express.Router()

const {getCategory, createCategory, editCategory, deleteCategory} = require('../controller/category')

Route
    .get('/', getCategory)
    .post('/', createCategory)
    .put('/:id', editCategory)
    .delete('/:id', deleteCategory )

module.exports = Route