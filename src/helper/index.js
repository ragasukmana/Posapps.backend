module.exports = {
    response: (response, status, data) => {
        const result = {}
        result.status = status || 200
        result.data = data

        return response.status(result.status).json(result)
    },
    qtyresponse: (response, status, message) => {
        const result = {}
        result.status = status || 403
        result.message = 'Quantity product must be 1 or more'
        
        return response.status(result.status).json(result)
    }
}