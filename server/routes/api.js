const express = require('express');

const flightsController = require('../controllers/flightsController');

const router = express.Router();

router.get('/', flightsController.getQuotes, (req, res) =>
  res.status(200).send("hello")
);

module.exports = router;