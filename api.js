var helpers = require('./helpers');

/**
 * Gets conditions for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 */
exports.conditions = function(opts, done) {
  helpers.get(this.url('conditions', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.current_observation);
  });
}

/**
 * Gets forecast for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 */
exports.forecast = function(opts, done) {
  helpers.get(this.url('forecast', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

/**
 * Gets forecast 10 days in advance for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 */
exports.forecast10day = function(opts, done) {
  helpers.get(this.url('forecast10day', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.forecast);
  });
}

/**
 * Gets hourly conditions for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 */
exports.hourly = function(opts, done) {
  helpers.get(this.url('hourly', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}

/**
 * Gets hourly conditions 10 days in advance for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 */
exports.hourly10day = function(opts, done) {
  helpers.get(this.url('hourly10day', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.hourly_forecast);
  });
}
/**
 * Gets severe weather alerts for a specific location
 * @param {Object} opts - optional object that bypasses initting a client
 * @param  {Function} callback - returns err, data
 * data is an empty array if no current alerts for specified location exist
 */
exports.alerts = function(opts, done) {
  helpers.get(this.url('alerts', opts), function(err, data) {
    if (err) return done(err);
    return done(null, data.alerts);
  });
}
