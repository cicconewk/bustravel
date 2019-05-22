const mongoose = require('mongoose');
const URI = 'mongodb://admin:bustravelp4ss@ds259586.mlab.com:59586/bustravel';

mongoose.connect(URI, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify: false}, 
  (err) => {
    if (err) throw new Error(err);
    console.log('MongoDB connected successfully.');
});

module.exports = mongoose;