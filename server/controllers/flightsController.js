var unirest = require("unirest");

const flightsController = {};

flightsController.getQuotes = (req, res, next) => {
  
  var request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/JFK-sky/2020-12-25");

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

flightsController.getQuotesQuery = (req, res, next) => {
  
  const baseuri = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/';
  const from = req.params["from"] + '-sky/';
  const to = req.params["to"] + '-sky/';
  const date = req.params["date"];
  const uri = baseuri + from + to + date;

  var request = unirest("GET", uri);

  request.headers({
    "x-rapidapi-key": "9414fa9003mshcb07fe5550c2c42p18a582jsn00af9b1af6e5",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });


  request.end(function (response) {
    if (response.error) throw new Error(response.error);

    const carriers = response.body.Carriers;
    const quotes = response.body.Quotes;
    const obj = {};
    
    for (let i = 0; i < quotes.length; i++) {
      const price = quotes[i]['MinPrice'];
      const carrierID = quotes[i]['OutboundLeg']['CarrierIds'][0];
      let name = '';
      
      for (let j = 0; j < carriers.length; j++) {
        if (carrierID === carriers[j]['CarrierId']) {
          name = carriers[j]['Name'];
        }
      }

      obj[price] = name;
    }

    res.locals.quotes = response.body.Quotes;
    res.locals.obj = obj;

    return next();
  });

}

module.exports = flightsController;