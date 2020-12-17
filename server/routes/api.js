const express = require('express');

const flightsController = require('../controllers/flightsController');

const router = express.Router();

router.get('/', flightsController.getQuotes, (req, res) => {
  return res.status(200).json(res.locals.quote);
  }
);

router.get('/query/:from-:to/:date', flightsController.getQuotesQuery, (req, res) => {
  return res.status(200).json(res.locals.obj);
  }
);

module.exports = router;