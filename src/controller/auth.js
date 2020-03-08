const {CreateUser, LoginUser, PutUser, getUser, DeleteUser, getPage} = require('../models/auth')
const helper = require('../helper')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(6)


module.exports = {
    getUser: async(request, response) => {
        try{
            const param ={
                id_user: request.query.id_user
            }
            const result = await getUser(param)
            const total = await getPage()
            const{totalItem, totalPage} = total
            return helper.response(response, 200, {
                result,
                totalItem,
                totalPage
            })
        } catch (error){
            return helper.response(response, 400, error)
        }
    },
    CreateUser: async (request, response) => {
        try {
            const setData = {
                username: request.body.username,
                password: bcrypt.hashSync(request.body.password, salt),
                name: request.body.name,
                role: request.body.role,
                pictures: request.file ? request.file.path : ''
            }
            const result = await CreateUser(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            console.log(error);
            return helper.response(response, 400, error)
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
            return helper.response(response, 400, {error, message: "Password Incorrect"})
        }
    },
    EditUser: async (request, response) => {
        try {
            const setData = {
                username: request.body.username,
                password: bcrypt.hashSync(request.body.password, salt),
                name: request.body.name,
                role: request.body.role,
                pictures: request.file ? request.file.path : '' 
            }
            const id_user = request.params.id_user
            const result = await PutUser(setData, id_user)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    },
    DeleteUser: async(request, response) => {
        try {
            const id_user = request.params.id_user
            const result = await DeleteUser(id_user)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    }
}