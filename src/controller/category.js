const {getCategory, postCategory, putCategory, deleteCategory} = require('../models/category')
const helper = require('../helper')

module.exports = {
    getCategory: async(request, response) => {
        const result = await getCategory()
        return helper.response(response, 200, result)
    },
    createCategory: async(request, response) =>{
        try {
            const setData = {
                name: request.body.name
            }
            const result = await postCategory(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 403, error)
        }
    },
    editCategory: async(request, response) => {
        try {
            const setData = {
                name: request.body.name
            }
            const id = request.params.id
            const result = await putCategory(setData, id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    },
    deleteCategory: async(request, response) => {
        try {
            const id = request.params.id
            const result = await deleteCategory(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    }
    
}