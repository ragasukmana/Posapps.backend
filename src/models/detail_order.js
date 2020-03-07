const connection = require('../config/mysql')
const helper = require('../helper')


module.exports = {
    getOrder: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM details_order', (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getPostOrder: (param) => {
        return new Promise((resolve, reject) => {
            let sort = ''
            let limit = ''
            if (param.sortby) {
                sort = ` ORDER BY ${param.sortby}`
            }
            if (param.limit) {
                limit = ` LIMIT ${param.limit}`
            } else {
                limit = ` LIMIT 100`
            }
            let query = 'SELECT account.name as name_account, post_order.* FROM post_order INNER JOIN account ON account.id_user = post_order.cashier' + sort + limit
            connection.query(query, (error, result) => {
                if (!error) {
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    setIdOrder: (order_reff, cashier) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO post_order SET order_reff=?, cashier=?, total_price=0', [order_reff, cashier],
                (error, result) => {
                    if (!error) {
                        const data = {
                            order_reff,
                            ...result
                        }
                        resolve(data)
                    } else {
                        console.log(error);
                        reject(new Error(error))
                    }
                })
        })
    },
    setDetail: (dataDetails) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO details_order SET ?', dataDetails,
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            message: 'Order Added',
                            ...dataDetails
                        }
                        return resolve(newResult)
                    } else {
                        console.log(error);
                        reject(new Error(error))
                    }
                })
        })
    },
    getPrice: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT price FROM products WHERE id=?', [id],
                (error, result) => {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
        })
    },
    setTotalPrice: (requestOrder, price) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE post_order SET total_price=? WHERE order_reff=?', [price, requestOrder],
                (error, result) => {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                })
        })
    },
    deleteOrder: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM details_order WHERE id=?', id, (error, result) => {
                if (!error) {
                    const newResult = {
                        message: 'Deleted Success',
                        id: id
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getNameProduct: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT name_product FROM products WHERE id=?', [id], (error, result) => {
                if (!error) {
                    const newResult = {
                        name_product: result[0].name_product
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}