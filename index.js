var api = require('./api');

function Wunderground(key, city, state) {
  this.key = key || null;
  this.city = city || null;
  this.state = state || null;

  this.url = function(type, opts) {
    var city = opts.city || this.city;
    var state = opts.state || this.state;
    var key = opts.key || this.key;
    return ['http://api.wunderground.com/api/', key, '/', type, '/q/', state, '/', city, '.json'].join('');
  }

  this.conditions = api.conditions;
  this.forecast = api.forecast;
  this.forecast10day = api.forecast10day;
  this.hourly = api.hourly;
  this.hourly10day = api.hourly10day;
  this.alerts = api.alerts;
}
module.exports = Wunderground;
