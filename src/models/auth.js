const connection = require('../config/mysql')
const bcrypt = require('bcryptjs')

module.exports = {
    CreateUser: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO account SET ?', setData, (error, result) => {
                if (!error) {
                    delete setData.password
                    const newResult = {
                        ...setData
                    }
                    resolve(newResult)
                    console.log(newResult);
                } else {
                    if (error.errno == '1062') {
                        reject(new Error(error))
                        console.log(error);
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
                    bcrypt.compare(data.password, result[0].password).then((result) => {
                        if (result !== false) {
                            delete data.password
                            const newResult = {
                                ...data
                            }
                            resolve(newResult)
                        } else {
                            reject(new Error(error))
                            console.log(error);
                            
                        }
                    })

                })
        })
    }
}