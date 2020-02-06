const connection = require('../config/mysql')
const bcrypt = require('bcryptjs')

module.exports = {
    getUser:() => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT id_user, username, name, role, create_date, update_date FROM account', (error, result) => {
                if(!error){
                    resolve(result)
                } else{
                    reject(new Error(error))
                }
            })
        })
    },
    CreateUser: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO account SET ?', setData, (error, result) => {
                if (!error) {
                    delete setData.password
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    if (error.errno == '1062') {
                        reject(new Error(error))
                    } else {
                        reject(error)
                    }

                }
            })
        })
    },
    LoginUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM account WHERE username=?',
                data.username, (error, result) => {
                    const detailAccount = {
                        ...result[0]
                    }
                    bcrypt.compare(data.password, result[0].password).then((result) => {
                        if (result !== false) {
                            delete detailAccount.password
                            resolve(detailAccount)
                        } else {
                            reject(new Error(error))
                            
                        }
                    })

                })
        })
    },
    PutUser:(setData, id_user) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE account SET? WHERE id_user=?', [setData, id_user], (error, result) => {
                if(!error){
                    delete setData.password
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)                    
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    DeleteUser:(id_user) => {
        return new Promise ((resolve, reject) => {
            connection.query('DELETE from account WHERE id_user=?', id_user, (error, result)=> {
                if(!error){
                    const newResult={
                        message:"success deleted"
                    }
                    resolve(newResult)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    getPage:() => {
        return new Promise ((resolve, reject) => {
            connection.query('SELECT COUNT(*) as numRows FROM account',(error,result)=> {
                const numRows = result[0].numRows
                const numPages = Math.ceil(numRows/6)

                if(!error) {
                    const newResult={
                        totalItem: numRows,
                        totalPage: numPages
                    }
                    resolve(newResult)
                }
                else
                reject(new Error(error))
            })
        })
    }
}