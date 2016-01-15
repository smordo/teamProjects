var express    = require('express')
  , app        = express()
  , logger     = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose   = require('mongoose')
  , port = process.env.PORT || 3000
  , routes = require('./config/routes/cars_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//connect to mongodb via mongoose
mongoose.connect('mongodb://localhost/cars_db', function(){
  console.log('Mongodb connected to db cars')
})

//use cars route file
app.use(routes)


//listen on port
app.listen(port)
console.log("connected to port " + port )
