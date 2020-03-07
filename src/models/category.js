const connection = require('../config/mysql')

module.exports = {
    getCategory: (param) => {
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM category', (error, result)=>{
                if (!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    postCategory:(setData) =>{
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO category SET ?', setData, (error, result) =>{
                if (!error){
                    const newResult = {
                        message: "Category Success Added",
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    putCategory:(setData, id) =>{
        return new Promise((resolve, reject) => {
            connection.query('UPDATE category SET ? WHERE id=?', [setData, id], (error, result) => {
                if (!error){
                    const newResult = {
                        message: "Category Success Edited",
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteCategory:(id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE from category WHERE id=?', id,(error, result) => {
                if (!error){
                    const newResult = {
                        message: "Category Success Deleted"
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    getPage:() => {
        return new Promise((resolve, reject) => {
        connection.query('SELECT COUNT(*) as numRows FROM category', (error, result) => {
            const numRows = result[0].numRows
            const numPages = Math.ceil(numRows/6)

            if(!error) {
                const newResult={
                    totalItem: numRows,
                    totalPage: numPages
                }
                resolve(newResult)
            }else
            reject(new Error(error))
        })
        })
    }
}