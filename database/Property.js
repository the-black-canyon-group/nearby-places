const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const PropertySchema = new Schema({
  id: { type: Number, unique: true },
  location: String,
  price: Number,
  title: String,
  ratings: [Number],
  roomType: String,
  image: String,
  zip: Number,

});

module.exports = mongoose.model('Property', PropertySchema);
