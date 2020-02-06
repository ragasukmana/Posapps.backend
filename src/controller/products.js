const {getProducts, postProducts, putProducts, deleteProducts, 
    searchname, getPage, getDataSort} = require('../models/products')
const helper = require('../helper')

module.exports = {
    getProducts: async(request, response) => {
        const result = await getProducts()
        return helper.response(response, 200, result)
    },
    createProducts: async(request, response) => {
        try {
            const setData = {
                    name_product: request.body.name_product,
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
                name_product: request.body.name_product,
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
            name_product: request.query.name_product,
            offset : request.query.offset,
            limit: request.query.limit,
            sortby: request.query.sortby,
            category: request.query.category
        }
        const result = await searchname(param)
        const total = await getPage(param)
        const {TotalItem, TotalPage} = total
        return helper.response(response, 200, {
            result,
            TotalPage,
            TotalItem
        
        })
      } catch (error) {
          console.log(error);
          
        return helper.response(response, 400, error)
      }

   }
}