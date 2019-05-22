const { Schema, model } = require('mongoose')

const driverSchema = new Schema({
  id: {type: String, unique: true, required: true},
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date}
});

module.exports = model('Driver', driverSchema)