const Travel = require('../models/travel.model');

module.exports = {
  create: async ({busPlate, destination, departure_at, arrive_at}) => {
    try {
      // const isTravel = await Travel.findOne({busNumber: busNumber, departure_at: departure_at});
      // if (isTravel !== null) {
      //   return response = {message: "The travel is already registered.", error: false};
      // }
      const newTravel = new Travel({
        departure: new Date(departure_at),
        arrive_at: new Date(arrive_at),
        destination: destination,
        busPlate: busPlate
      });

      await newTravel.save();
      return response = {error: false, message: 'The travel was registered successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  getAll: async () => {
    try {
      const data = await Travel.find();
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  getRouteAverage: async () => {
    // CODE
  },
  get: async (destination) => {
    try {
      const data = await Travel.findOne({destination: destination});
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  registerPassenger: async (travel_id, passenger_id) => {
    //THE AGGREGATE METHOD IS NOT RETURNING THE EXPECTED VALUE
    // WHICH WAS GOING TO BE USED AS VALIDATION TO KNOW IF THERE ARE SEATS AVAILABLES.
    try {
      const capacity_available = await Travel.aggregate([
        // {$unwind: '$passengers'},
        {$project: {
          assigned_seats: {$count: "$passangers"}
        }}
      ]);

      console.log(capacity_available)
    } catch (error) {
      
    }
  },
  edit: async ({departure, destination, distance, buses, updated_at}) => {
    try {
      const isTravel = await Travel.findOneAndUpdate({id: id},
        {departure: departure, destination: destination,
          distance: distance, buses: buses, updated_at: updated_at});
      if (isTravel === null) {
        return response = {message: "The travel is not registered.", error: false};
      }
      return response = {error: false, message: 'The travel was updated successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  delete: async (id) => {
    try {
      const isTravel = await Travel.findOneAndDelete({id: id});
      if (isTravel === null) {
        return response = {message: "The travel is not registered.", error: false};
      }
      return response = {error: false, message: 'The travel was deleted successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};      
    }
  }
};