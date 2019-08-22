const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true })

PropertySchema = new Schema({
  location: String,
  price: Number,
  title: String,
  ratings: [Number],
  roomType: String,
  image: String

})

module.exports = mongoose.model('Property', PropertySchema)