var carsController = require('../../controllers/cars_controller.js'),
    express = require('express'),
    carRoutes = express.Router()

//define the home page
carRoutes.route('/')
  .get(carsController.index)
  .post(carsController.create)

carRoutes.route('/:id')
  .get(carsController.show)
  .patch(carsController.update)
  .delete(carsController.destroy)




module.exports = carRoutes
