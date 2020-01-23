const {getProducts, postProducts, putProducts, deleteProducts, searchname} = require('../models/products')
const helper = require('../helper')

module.exports = {
    getProducts: async(request, response) => {
        const result = await getProducts()
        return helper.response(response, 200, result)
    },
    createProducts: async(request, response) => {
        try {
            const setData = {
                    name: request.body.name,
                    description: request.body.description,
                    image: request.file.path,
                    category: request.body.category,
                    price: request.body.price
            }
            const result = await postProducts(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    }
    ,
    editProducts: async(request, response) => {
        try {
            const setData = {
                name: request.body.name,
                description: request.body.description,
                image: request.file.path,
                category: request.body.category,
                price: request.body.price
            }
            const id = request.params.id
            const result = await putProducts(setData, id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    },
    deleteProducts: async(request, response) => {
        try {
            const id = request.params.id
            const result = await deleteProducts(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.qtyresponse(response, 400, error)
            
        }
    },
    findProducts: async(request, response) => {
      try {
        const param = {
            name: request.query.name,
            offset : request.query.offset,
            limit: request.query.limit,
            sortby: request.query.sortby,
            category: request.query.category,
        }
        const result = await searchname(param)
        return helper.response(response, 200, result)
      } catch (error) {
        return helper.response(response, 400, error)
      }

   },
}