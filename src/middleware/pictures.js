const multer = require('multer')
const path = require('path')
const rand = require('random-id')
const helper = require('../helper')

    const storage = multer.diskStorage({
        destination: (request, file, cb) => {
            cb(null, './pictures/')
        },
        filename: (request, file, cb) => {
            cb(null, rand(10, '0') + path.extname(file.originalname))
        }
    })
    const upload = multer({storage, 
    limits:{fileSize:500000}, fileFilter:(req, file, cb)=>{
        const ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error ('file not support'), false)
        }
        cb(null, true)
    }}) 

    fileFilter = (req,res,next) => {
            upload.single('image')(req,res,(error) => {  
                console.log(error);
                if (error instanceof multer.MulterError){
                    return helper.response(res, 403, {message: error.message})
                }
                else{
                    next()  
                }
            })
        // })
    } 



module.exports = {fileFilter}