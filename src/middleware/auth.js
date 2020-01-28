const jwt = require('jsonwebtoken')
const helper = require('../helper')

module.exports  = {
  authorization: (request, response, next) => {
    const token = request.get('Authorization')
    jwt.verify(token, 'uzumy112', (error, result) => {
      if(error && error.name === "TokenExpiredError" || error && error.name === "JsonWebTokenError"){
        const result = {message: error.message}
        return helper.response(response, 403, result)
      }else{
        request.token = result
        next()
      }
    })
  }
}