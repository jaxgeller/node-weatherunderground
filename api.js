var helpers = require('./helpers');

exports.conditions = function(done) {
  helpers.get(this.url('conditions'), function(err, data) {
    if (err) return done(err);
    return done(null, data.current_observation);
  });
}

exports.forecast = function(done) {
  helpers.get(this.url('forecast'), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

exports.forecast10day = function(done) {
  helpers.get(this.url('forecast10day'), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

exports.hourly = function(done) {
  helpers.get(this.url('hourly'), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}

exports.hourly10day = function(done) {
  helpers.get(this.url('hourly10day'), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}