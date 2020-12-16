var unirest = require("unirest");

const flightsController = {};

flightsController.getQuotes = (req, res, next) => {
  
  var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/JFK-sky/2020-12-24");

  req.headers({
    "x-rapidapi-key": "9414fa9003mshcb07fe5550c2c42p18a582jsn00af9b1af6e5",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);

    return next();
  });

}

module.exports = flightsController;