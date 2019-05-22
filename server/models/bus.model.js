const { Schema, model } = require('mongoose')

const busSchema = new Schema({
  plate: {type: String, unique: true, required: true},
  color: {type: String},
  code: {type: String, required: true},
  capacity: {type: Number, required: true},
  driver: {type: String, ref: 'Driver'},
  routes: {type: [Schema.Types.ObjectId], ref: 'Route'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date}
});

module.exports = model('Bus', busSchema)