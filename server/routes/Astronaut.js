const express = require('express');
const router = express.Router();
const Astronaut = require('../models/Astronaut');

router.get('/', async (req, res) => {
  try {
    const astronauts = await Astronaut.find();
    res.json(astronauts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching astronauts' });
  }
});

module.exports = router;
