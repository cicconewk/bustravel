const Passenger = require('../models/passenger.model');

module.exports = {
  create: async ({id, name, lastname}) => {
    try {
      const isPassenger = await Passenger.findOne({id: id});
      if (isPassenger !== null) {
        return response = {message: "The passenger is already registered.", error: false};
      }

      const newPassenger = new Passenger({
        id: id,
        name: name,
        lastname: lastname
      });

      await newPassenger.save();
      return response = {error: false, message: 'The passenger was registered successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  getAll: async () => {
    try {
      const data = await Passenger.find();
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  get: async (id) => {
    try {
      const data = await Passenger.findOne({id: id});
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  edit: async ({id, name, lastname, updated_at}) => {
    try {
      const isPassenger = await Passenger.findOneAndUpdate({id: id},{name: name, lastname: lastname, updated_at: updated_at});
      if (isPassenger === null) {
        return response = {message: "The passenger is not registered.", error: false};
      }
      return response = {error: false, message: 'The passenger was updated successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  delete: async (id) => {
    try {
      const isPassenger = await Passenger.findOneAndDelete({id: id});
      if (isPassenger === null) {
        return response = {message: "The passenger is not registered.", error: false};
      }
      return response = {error: false, message: 'The passenger was deleted successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};      
    }
  }
};