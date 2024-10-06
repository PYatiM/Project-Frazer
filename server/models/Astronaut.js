const mongoose = require('mongoose');

const astronautSchema = new mongoose.Schema({
  name: String,
  biography: String
});

const Astronaut = mongoose.model('Astronaut', astronautSchema);

module.exports = Astronaut;
