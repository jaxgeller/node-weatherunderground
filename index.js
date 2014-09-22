var api = require('./api');

function Wunderground(key, city, state) {
  this.key = key;
  this.city = city;
  this.state = state;
  this.url = function(type) {
    return ['http://api.wunderground.com/api/', this.key, '/', type, '/q/', this.state, '/', this.city, '.json'].join('');
  }

  this.conditions = api.conditions;
  this.forecast = api.forecast;

  this.forecast10day = api.forecast10day;
  this.hourly = api.hourly;
  this.hourly10day = api.hourly10day;

}


var client = new Wunderground(process.env.WEATHERPASS, 'Washington', 'DC');

// client.conditions(function(err, res) {
//   if (err) console.log(err);
//   else console.log(res);
// });

// client.forecast(function(err, res) {
//   if (err) console.log(err);
//   else console.log(res);
// });

// client.forecast10day(function(err, res) {
//   if (err) console.log(err);
//   else console.log(res);
// });