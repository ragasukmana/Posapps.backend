const { getOrder, postOrder, deleteOrder, getPrice, setIdOrder, setTotalPrice, getPostOrder, setDetail,
    getNameProduct } = require('../models/detail_order')
const helper = require('../helper')
const rand = require('random-id')

module.exports = {
    getOrder: async (request, response) => {
        const result = await getOrder()
        return helper.response(response, 200, result)
    },
    getPostOrder: async (request, response) => {
    try {
        const param = {
            sortby: request.query.sortby,
            limit: request.query.limit
        }
        const result = await getPostOrder(param)
        return helper.response(response, 200, result)
    } catch (error) {
        return helper.response(response, 400, error)
        
     }
      
    },
    createOrder: async (request, response) => {
        try {
            const { user_id, order } = request.body
            order.map(order => {
                const { id, quantity } = order
                if (!id || !quantity) {
                    jsonError(response, error)
                    throw new Error('ERROR')
                }
                if (quantity < 1) {
                    jsonError(response, error)
                    throw new Error('ERROR')
                }
                if (!response.body && !user_id || !order) {
                    jsonError(response, error)
                    throw new Error('ERROR')
                }
            })
            const order_reff = rand(6, '0')
            const cashier = request.body.user_id
            const requestOrder = await setIdOrder(order_reff, cashier)
            let total = 0
            let dataOrderDetail = []
            Promise.all(request.body.order.map(async (element) => {
                const name_product = await getNameProduct(element.id)
                const dataDetails = {
                    id: element.id,
                    order_id: requestOrder.insertId,
                    quantity: element.quantity
                }
                const price = await getPrice(element.id)
                const newprice = {
                    ...price[0]
                }
                dataDetails.price = newprice.price
                await setDetail(dataDetails)
                total += newprice.price * element.quantity
                await setTotalPrice(requestOrder.order_reff, total)  
                
                const newDataDetails = {
                    id: element.id,
                    order_id: requestOrder.insertId,
                    quantity: element.quantity,
                    name_product: name_product.name_product,
                    price: dataDetails.price
                }
                dataOrderDetail.push(newDataDetails)
            })).then(()=> {
                const newResult={
                    user: user_id,
                    total,
                    order_reff: order_reff,
                    orders: [...dataOrderDetail],
                }
                return helper.response(response, 200, newResult)
            })
        } catch (error) {
            console.log(error);
            return helper.response(response, 400, error);
    
        }
    },
    deleteOrder: async (request, response) => {
        try {
            const id = request.params.id
            const result = await deleteOrder(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    }
}
