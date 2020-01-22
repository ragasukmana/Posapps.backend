const express = require('express')
const Route = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, './pictures/')
    },
    filename: (request, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})

const {getProducts, createProducts, editProducts, deleteProducts, findProducts} = require('../controller/products')

Route
    
    .get('/', findProducts)
    .post('/', upload.single('image') , createProducts)
    .put('/:id', upload.single('image'), editProducts)
    .delete('/:id', deleteProducts)

module.exports = Route