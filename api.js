var helpers = require('./helpers');

/**
 * Gets conditions for a specific location
 * @param  {Function} callback - returns err, data
 */
exports.conditions = function(done) {
  helpers.get(this.url('conditions'), function(err, data) {
    if (err) return done(err);
    return done(null, data.current_observation);
  });
}

/**
 * Gets forecast for a specific location
 * @param  {Function} callback - returns err, data
 */
exports.forecast = function(done) {
  helpers.get(this.url('forecast'), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

/**
 * Gets forecast 10 days in advance for a specific location
 * @param  {Function} callback - returns err, data
 */
exports.forecast10day = function(done) {
  helpers.get(this.url('forecast10day'), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

/**
 * Gets hourly conditions for a specific location
 * @param  {Function} callback - returns err, data
 */
exports.hourly = function(done) {
  helpers.get(this.url('hourly'), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}

/**
 * Gets hourly conditions 10 days in advance for a specific location
 * @param  {Function} callback - returns err, data
 */
exports.hourly10day = function(done) {
  helpers.get(this.url('hourly10day'), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}