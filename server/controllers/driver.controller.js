const Driver = require('../models/driver.model');

module.exports = {
  create: async ({id, name, lastname}) => {
    try {
      const isDriver = await Driver.findOne({id: id});
      if (isDriver !== null) {
        return response = {message: "The driver is already registered.", error: false};
      }

      const newDriver = new Driver({
        id: id,
        name: name,
        lastname: lastname
      });

      await newDriver.save();
      return response = {error: false, message: 'The driver was registered successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  getAll: async () => {
    try {
      const data = await Driver.find();
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  get: async (id) => {
    try {
      const data = await Driver.findOne({id: id});
      return response = {error: false, data: data}
    } catch (error) {
      return response = {error: true, message: `There was an unexpected error ${error}`}
    }
  },
  edit: async ({id, name, lastname, updated_at}) => {
    try {
      const isDriver = await Driver.findOneAndUpdate({id: id},{name: name, lastname: lastname, updated_at: updated_at});
      if (isDriver === null) {
        return response = {message: "The driver is not registered.", error: false};
      }
      return response = {error: false, message: 'The driver was updated successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};
    }
  },
  delete: async (id) => {
    try {
      const isDriver = await Driver.findOneAndDelete({id: id});
      if (isDriver === null) {
        return response = {message: "The driver is not registered.", error: false};
      }
      return response = {error: false, message: 'The driver was deleted successfully.'};
    } catch (error) {
      return response = {error: true, message: `There is an unexpected error: ${error}`};      
    }
  }
};