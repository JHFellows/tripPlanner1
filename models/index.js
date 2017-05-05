const dbConnection = require('./db');
const HotelModel = require('./hotel');
const PlaceModel = require('./place');
const RestaurantModel = require('./restaurant');
const ActivityModel = require('./activity');

//associations
HotelModel.belongsTo(PlaceModel);
RestaurantModel.belongsTo(PlaceModel);
ActivityModel.belongsTo(PlaceModel);

module.exports = {
  db: dbConnection,
  Hotel: HotelModel,
  Place: PlaceModel,
  Restaurant: RestaurantModel,
  Activity: ActivityModel
};
