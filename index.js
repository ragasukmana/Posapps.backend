const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routerNavigation = require('./src')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')


app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(3001, "127.0.0.1", () =>{
    console.log("Listen on 127.0.0.1:3001");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use('/', routerNavigation)

app.listen(85, function () {
    console.log('CORS-enabled web server listening on port 85')
  })