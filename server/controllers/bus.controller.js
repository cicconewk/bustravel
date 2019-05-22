const Bus = require('../models/bus.model');

module.exports = {
  create: async ({plate, color, code, capacity, driver_id, routes_id}) => {
    try {
      const isBus = await Bus.findOne({plate: plate});
      if (isBus !== null) {
        return response = {message: "The bus plate is already registered.", error: false};
      }

      const newBus = new Bus({
        plate: plate,
        color: color,
        code: code, 
        capacity: parseInt(capacity),
        driver: driver_id,
        routes: routes_id
      });

      await newBus.save();
      return response = {error: false, message: 'The bus was registered successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  getAll: async () => {
    try {
      const data = await Bus.find();
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  get: async (plate) => {
    try {
      const data = await Bus.findOne({plate: plate});
      console.log(data)
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  edit: async ({plate, color, code, capacity, driver_id, routes_id, updated_at}) => {
    try {
      const isBus = await Bus.findOneAndUpdate(
        {plate: plate},
        {plate: plate, color: color, code: code, capacity: capacity, 
          driver: driver_id, routes: routes_id, updated_at: updated_at
        });
      if (isBus === null) {
        return response = {message: "The bus is not registered.", error: false};
      }
      return response = {error: false, message: 'The bus was updated successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  delete: async (plate) => {
    try {
      const isBus = await Bus.findOneAndDelete({plate: plate});
      if (isBus === null) {
        return response = {message: "The bus is not registered.", error: false};
      }
      return response = {error: false, message: 'The bus was deleted successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};      
    }
  }
};