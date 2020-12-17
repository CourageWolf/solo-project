const express = require('express');

const flightsController = require('../controllers/flightsController');

const router = express.Router();

router.get('/', flightsController.getQuotes, (req, res) => {
  return res.status(200).json(res.locals.quote);
  }
);

router.get('/query/:val', flightsController.getQuotesQuery, (req, res) => {
  return res.status(200).json(res.locals.quote);
  }
);

module.exports = router;