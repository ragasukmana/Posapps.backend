const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routerNavigation = require('./src')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')


const pictures = express.static(path.join(__dirname, 'pictures'))
const profilepic = express.static(path.join(__dirname, 'profilepic'))
app.use('/pictures', pictures)
app.use('/profilepic', profilepic)
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () =>{
    console.log("Listen on 127.0.0.1:3003");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use('/', routerNavigation)

app.listen(97, function () {
    console.log('CORS-enabled web server listening on port 97')
  })