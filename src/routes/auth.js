const express = require('express')
const Route = express.Router()
const jwt = require('jsonwebtoken')
const {LoginUser, CreateUser} = require('../controller/auth')

    Route
    .post('/login', LoginUser)
    .post('/registration', CreateUser)

module.exports = Route