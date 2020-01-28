module.exports = {
    response: (response, status, data) => {
        const result = {}
        result.status = status || 200
        result.data = data

        return response.status(result.status).json(result)
    },
    passwordres: (response, status, message) => {
        const result = {}
        result.status = status || 403
        result.message = 'Password Incorrect'
        
        return response.status(result.status).json(result)
    }
}