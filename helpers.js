var request = require('request');

exports.get = function(url, done) {
  request(url, function(err, res, body) {
    if (err) return done(err);
    if (res.statusCode !== 200) return done(new Error('Returned: ' + res.statusCode));
    if (body) {
      try {
        body = JSON.parse(body);
        if (body.response.error) return done(new Error(body.response.error.description));
        else return done(null, body);
      } catch (e) {
        return done(e);
      }
    }
  });
}