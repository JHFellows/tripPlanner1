const router = require('express').Router();
const Model = require('../models');
const Hotel = Model.Hotel;
const Restaurant = Model.Restaurant;
const Activity = Model.Activity;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
  const findingHotels = Hotel.findAll({});
  const findingRestaurants = Restaurant.findAll({});
  const findingActivities = Activity.findAll({});

  Promise.all([findingHotels, findingRestaurants, findingActivities])
  .spread(function(allHotels, allRestaurants, allActivities) {
    res.render('index', {
      hotels: allHotels,
      restaurants: allRestaurants,
      activities: allActivities
    });
  })
  .catch(next);
})

module.exports = router;
