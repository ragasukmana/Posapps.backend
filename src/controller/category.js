const {getCategory, postCategory, putCategory, deleteCategory, getPage} = require('../models/category')
const helper = require('../helper')

module.exports = {
    getCategory: async(request, response) => {
        const result = await getCategory()
        const total = await getPage()
        const {totalItem, totalPage} = total
        return helper.response(response, 200, {
            result,
            totalPage,
            totalItem
        })
    },
    createCategory: async(request, response) =>{
        try {
            const setData = {
                name: request.body.name
            }
            const result = await postCategory(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
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