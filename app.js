var express    = require('express')
  , app        = express()
  , logger     = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose   = require('mongoose')
  , port = process.env.PORT || 3000

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:false}))

  mongoose.connect('mongodb://localhost/cars_db', function(){
    console.log('Mongodb connected to db:encrypt')
  })

app.listen(port)
console.log("connected to port " + port )
