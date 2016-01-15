var Car = require('../models/car.js')


function index(req,res){
  Car.find(function(err,cars){
    if(err) res.json({message: "No cars found"})
    res.render('layout', ({cars: cars}));
  })
}

function show(req,res){
  var id = req.params.id
  Car.findById({_id: id}, function(err, car){
    if (err) res.json({message: "No car found"})
    res.json({car: car})
  });
}

function create(req,res){

  console.log('in POST');
  console.log('body:', req.body);


  var car  = new Car()
  car.make = req.body.make
  car.model = req.body.model
  car.year = req.body.year
  car.color = req.body.color

  car.save(function(err){
    if(err) res.json({message:"Cannot create car"})
    res.redirect('/cars')
  })
}

function update(req,res) {
  var id = req.params.id
  Car.findOneAndUpdate({_id: id}, function(err, car){
    if (err) res.json({message: "No car found"})
    if(req.body.make) car.make = req.body.make
    if(req.body.model) car.model = req.body.model
    if(req.body.year) car.year = req.body.year
    if(req.body.color) car.color = req.body.color

    car.save(function(err){
      if(err) res.json({message:"Cannot update car"})
      res.json({message: "Car updated!"})
    });
  })
}

function destroy(req,res){
  var id = req.params.id
  Car.findById({_id: id}, function(err, car){
    if (err) res.json({message: "No car found"})
    res.json({message: "Car deleted."})
  })
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}
