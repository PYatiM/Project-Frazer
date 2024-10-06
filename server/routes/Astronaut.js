const express = require('express');
const router = express.Router();
const Spacecraft = require('../models/Spacecraft');

router.get('/', async (req, res) => {
  try {
    const spacecraft = await Spacecraft.find();
    res.json(spacecraft);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching spacecraft' });
  }
});

module.exports = router;
