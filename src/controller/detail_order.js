const {getOrder, postOrder, deleteOrder, getPrice,setIdOrder, setTotalPrice,getPostOrder, setDetail} = require('../models/detail_order')
const helper = require('../helper')
const ran = require('random-id')

module.exports = {
    getOrder: async(request, response) => {
        const result = await getOrder()
        return helper.response(response, 200, result)
    },
    getPostOrder: async(request, response) => {
        const result = await getPostOrder()
        return helper.response(response, 200, result)
    },
    createOrder: async(request, response) => {
        try {
            const {user_id, order} = request.body
            order.map(order => {
                const{id_product, quantity} = order
                if(!id_product || !quantity){
                    jsonError(response, error)
                    throw new Error('ERROR')
                }
                if(quantity < 1) {
                    jsonError(response, error)
                    throw new Error('ERROR')
                }
                if(!response.body && !user_id || !order) {
                    jsonError(response, error)
                    throw new Error('ERROR')
                }  
            })
            const order_reff = ran(6,'0')
            const cashier = request.body.user_id
            const requestOrder = await setIdOrder(order_reff, cashier)
            
            // console.log(requestOrder);
            
            // console.log(request.body.order);
                let total = 0    
                await request.body.order.map(async(element)=> { 
                    const dataDetails = {
                        id_product: element.id_product,
                        order_id:requestOrder.insertId,
                        quantity: element.quantity,
                        payment: element.payment,
                    }
                    const price = await getPrice(element.id_product)
                    const newprice = {
                        ...price[0]
                    }
                    dataDetails.price = newprice.price
                    // console.log(price[0].price)
                    // console.log(newprice)
                    // console.log(dataDetails);
                    // console.log(typeof newprice.price);
                    // console.log(price);
                    // const result = await setDetail(dataDetails, element)
                    // console.log(dataDetails);
                    // console.log(element);
                    await setDetail(dataDetails)
                    total += newprice.price*element.quantity  
                    await setTotalPrice(requestOrder.order_reff, total)
                }) 
            return helper.response(response, 200, {message:'OK'})
            // console.log(await getTotalPrice(request.body.order));
            // const result = await postOrder(setData)
            // return helper.response(response, 200, setData)
            }catch (error) {
            return helper.response(response, 400, error)
        }
    },
    deleteOrder: async(request, response) => {
        try {
            const id = request.params.id
            const result = await deleteOrder(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 400, error)
        }
    }
}
