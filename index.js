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
module.exports = Wunderground;