const { Schema, model } = require('mongoose')

const travelSchema = new Schema({
  busPlate: {type: String, required: true},
  passengers: {type: [Schema.Types.ObjectId], ref:'Passenger'},
  destination: {type: Schema.Types.ObjectId, ref: 'Route'},
  departure_at: {type: Date},
  arrive_at: {type: Date}
});

module.exports = model('Travel', travelSchema)