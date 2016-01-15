var express = require('express'),
    router = express.Router()

//middleware


//define the home page
router.get('/cars', function(req,res){
  console.log("index")
  res.send("INDEX")
})

router.get('/cars/:id', function(req,res){
  console.log("show")
  res.send("SHOW")
})

router.get('/cars/new', function(req,res){
  console.log("new")
  res.send("NEW")
})

router.post('/cars', function(req,res){
  console.log("create")
  res.send("CREATE")
})

router.get('/cars/:id/edit', function(req,res){
  console.log("edit")
  res.send("EDIT")
})

router.patch('/cars/:id', function(req,res){
  console.log("update")
  res.send("UPDATE")
})

router.delete('/cars/:id', function(req,res){
  console.log("destroy")
  res.send("DESTROY")
})

module.exports = router
