const router = require('express').Router();
const Hotel = require('../models').Hotel;

router.get('/', function(req, res, next) {
  Hotel.findAll()
  .then(allHotels => {
    //console.log(hotels)
    res.render('index', {hotels: allHotels});
  }).catch(next)
  
})

module.exports = router;