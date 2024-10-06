const mongoose = require('mongoose');

const spacecraftSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Spacecraft = mongoose.model('Spacecraft', spacecraftSchema);

module.exports = Spacecraft;
