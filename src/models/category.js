const connection = require('../config/mysql')

module.exports = {
    getCategory: () => {
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
                console.log(setData);
                
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
    }
}