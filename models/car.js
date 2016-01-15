var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: {type: Number, max:4},
  color: String
})

var Car = mongoose.model('Car', carSchema)

module.exports = Car
