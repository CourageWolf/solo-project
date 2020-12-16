var unirest = require("unirest");

const flightsController = {};

flightsController.getQuotes = (req, res, next) => {
  
  var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/JFK-sky/2020-12-24");

  request.headers({
    "x-rapidapi-key": "9414fa9003mshcb07fe5550c2c42p18a582jsn00af9b1af6e5",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });


  request.end(function (response) {
    if (response.error) throw new Error(response.error);

    res.locals.quote = response.body.Quotes[0];

    return next();
  });

}

module.exports = flightsController;