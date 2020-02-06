const express = require('express')
const Route = express.Router()
const jwt = require('jsonwebtoken')
const {LoginUser, CreateUser, EditUser, getUser, DeleteUser} = require('../controller/auth')

    Route
    .get('/', getUser)
    .post('/login', LoginUser)
    .post('/registration', CreateUser)
    .put('/edituser/:id_user', EditUser)
    .delete('/:id_user', DeleteUser)

module.exports = Route