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
   
    const upload = multer({storage}) 

    fileFilter = () => {
        return ((req, res, next) => {
            upload.single('image')(req,res,() => {
                const ext = path.extname(req.file.filename)
                if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                    return helper.response(res, 400, {message: "Forbidden File Extension"})
                }else{
                    next()
                }
            })
        })
    } 
    
        
    
    // fileFilter: function (request, file,cb) {
    //     var ext = path.extname(file.originalname)
    //     if (ext !== ('.png' || '.jpg' || '.jpeg' || '.gif')) {
    //         return cb(new Error('not true'))
    //     }
    //     cb(null, true)
    // }
// })

module.exports = {fileFilter}