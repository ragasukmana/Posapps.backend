const connection = require('../config/mysql')
const fs = require('fs')

module.exports = {
    getProducts: () => {
        return new Promise((resolve, reject) =>{
            connection.query('SELECT * FROM products', (error, result)  =>{
                if (!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    searchname:(param) => {
        return new Promise((resolve, reject) => {
            let find = ''
            let offset = ''
            let limit =''
            let sort = ''
            let category = ''
            if (param.name) {
                find = ` WHERE name LIKE '%${param.name}%'` 
            } 
            if (param.limit){
                limit =  ` LIMIT ${param.limit}`
            }else{
                limit = ` LIMIT 100`
            }
            if(param.sortby){
                sort = ` ORDER BY ${param.sortby}`
            }
            if(param.category){
                category = ` WHERE category LIKE '%${param.category}%'`
            }
            if (param.offset){
                offset = ` OFFSET ${param.offset}`
            }
            let query = 'SELECT * FROM products'+find+sort+category+limit+offset
            connection.query(query, (error, result) =>{
                if (!error && query != undefined){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            } )
        })
    },
    postProducts: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO products SET ?', setData, (error, result) =>{
                if (!error){
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
    ,
    putProducts:(setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT image FROM products WHERE id=?', id, (error, result) => {
                const image = result[0].image
                if(image != '') {
                    fs.unlink(image, error => {
                        if(error) throw error
                    })
                } else {
                }
                connection.query('UPDATE products SET? WHERE id=?', [setData, id], (error, result) => {
                    if (!error){
                        const message = 'Berhasil di Update'
                        const newResult = {
                            message: message,
                            id: id,
                            ...setData
                        }
                        resolve(newResult)
                    } else {
                        reject(new Error(error))
                    }
                })
            })
            
        })
    }
    ,
    deleteProducts:(id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT image FROM products WHERE id=?', id, (error, result) => {
                    const image = result[0].image
                    if(image != '') {
                        fs.unlink(image, error => {
                            if (error) throw error
                        })
                    }else{
                    }
                    connection.query('DELETE from products WHERE id=?', id, (error, result)=>{
                        if (!error){
                            const newResult = {
                                message: 'File Deleted',
                            }
                            resolve(newResult)
                        } else {
                            reject(new Error(error))
                            
                        }
                    })
            })
        })
    }
}