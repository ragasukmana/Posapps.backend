const {CreateUser, LoginUser} = require('../models/auth')
const helper = require('../helper')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(6)


module.exports = {
    CreateUser: async (request, response) => {
        try {
            const setData = {
                username: request.body.username,
                password: bcrypt.hashSync(request.body.password, salt),
                name: request.body.name
            }
            const result = await CreateUser(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, {message:"Username Already Use"})
        }
    },
    LoginUser: async (request, response) => {
        try {
            const data = {
                username:request.body.username,
                password:request.body.password
            }
            const result = await LoginUser(data)
            const token = jwt.sign({result}, 'uzumy112', {algorithm:"HS256", expiresIn : '1h'})
            return helper.response(response, 200, {token, ...result})
        } catch (error) {
            return helper.passwordres(response, 400, {message: "Password Incorrect"})
        }
    }
}