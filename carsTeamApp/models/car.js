var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  color: String
})

var Car = mongoose.model('Car', carSchema)

module.exports = Car
