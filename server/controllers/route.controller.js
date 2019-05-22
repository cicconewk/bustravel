const Route = require('../models/route.model');

module.exports = {
  create: async ({departure, destination, distance, buses}) => {
    try {
      const isRoute = await Route.findOne({departure: departure, destination: destination});
      if (isRoute !== null) {
        return response = {message: "The route is already registered.", error: false};
      }

      const newRoute = new Route({
        departure: departure,
        destination: destination,
        distance: distance,
        buses: buses
      });

      await newRoute.save();
      return response = {error: false, message: 'The route was registered successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  getAll: async () => {
    try {
      const data = await Route.find();
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  get: async (destination) => {
    try {
      const data = await Route.findOne({destination: destination});
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  edit: async ({departure, destination, distance, buses, updated_at}) => {
    try {
      const isRoute = await Route.findOneAndUpdate({id: id},
        {departure: departure, destination: destination,
          distance: distance, buses: buses, updated_at: updated_at});
      if (isRoute === null) {
        return response = {message: "The route is not registered.", error: false};
      }
      return response = {error: false, message: 'The route was updated successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  delete: async (id) => {
    try {
      const isRoute = await Route.findOneAndDelete({id: id});
      if (isRoute === null) {
        return response = {message: "The route is not registered.", error: false};
      }
      return response = {error: false, message: 'The route was deleted successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};      
    }
  }
};