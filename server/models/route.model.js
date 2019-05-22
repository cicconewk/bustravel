const { Schema, model } = require('mongoose')

const routeSchema = new Schema({
  departure: {type: String, required: true},
  destination: {type: String, required: true},
  buses: {type: [String], ref: 'Bus'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date}
});

module.exports = model('Route', routeSchema)