const express = require('express');

const flightsController = require('../controllers/flightsController');

const router = express.Router();

router.get('/', flightsController.getQuotes, (req, res) => {
  // console.log(res.locals.quote);
  return res.status(200).json(res.locals.quote);
  }
);

module.exports = router;