var should = require('chai').should();

var Wunderground = require('../');
var client = new Wunderground(process.env.KEY, 'Washington', 'DC');
var opts = {
  key: process.env.KEY,
  city: 'Washington',
  state: 'DC'
}

var opts2 = {
  state: 'CA',
  city: 'San_Francisco'
}

describe('Wunderground API', function() {
  it('.conditions', function(done) {
    client.conditions('', function(err, res) {
      if (err) return done(err);
      res.should.be.an.object;
      res.display_location.full.should.eql('Washington, DC');
      res.should.have.property('temp_f');
      res.should.have.property('feelslike_f');
      res.should.have.property('icon');
      return done();
    });
  });

  it('.conditions #opts', function(done) {
    client.conditions(opts, function(err, res) {
      if (err) return done(err);
      res.should.be.an.object;
      res.display_location.full.should.eql('Washington, DC');
      res.should.have.property('temp_f');
      res.should.have.property('feelslike_f');
      res.should.have.property('icon');
      return done();
    });
  });

  it('.forecast', function(done) {
    client.forecast('', function(err, res) {
      if (err) return done(err);
      res = res.txt_forecast.forecastday;
      res.should.be.an.array;
      res[0].should.have.keys('period', 'icon', 'icon_url', 'title', 'fcttext', 'fcttext_metric', 'pop');
      return done();
    });
  });

  it('.forecast #opts', function(done) {
    client.forecast(opts2, function(err, res) {
      if (err) return done(err);
      res = res.txt_forecast.forecastday;
      res.should.be.an.array;
      res[0].should.have.keys('period', 'icon', 'icon_url', 'title', 'fcttext', 'fcttext_metric', 'pop');
      return done();
    });
  });

  it('.forecast10day', function(done) {
    client.forecast10day('', function(err, res) {
      if (err) return done(err);
      res = res.simpleforecast.forecastday;
      res.should.be.an.array;
      res[0].should.have.property('conditions');
      res[0].should.have.property('icon');
      res[0].should.have.property('pop');
      res[0].should.have.property('high');
      return done();
    });
  });

  it('.forecast10day #opts', function(done) {
    client.forecast10day(opts, function(err, res) {
      if (err) return done(err);
      res = res.simpleforecast.forecastday;
      res.should.be.an.array;
      res[0].should.have.property('conditions');
      res[0].should.have.property('icon');
      res[0].should.have.property('pop');
      res[0].should.have.property('high');
      return done();
    });
  });

  it('.hourly', function(done) {
    client.hourly('', function(err, res) {
      if (err) return done(err);
      res.should.be.an.array;
      res[0].should.have.property('FCTTIME');
      res[0].should.have.property('temp');
      res[0].should.have.property('icon');
      res[0].should.have.property('feelslike');
      res[0].should.have.property('pop');
      return done();
    });
  });

  it('.hourly #opts', function(done) {
    client.hourly(opts2, function(err, res) {
      if (err) return done(err);
      res.should.be.an.array;
      res[0].should.have.property('FCTTIME');
      res[0].should.have.property('temp');
      res[0].should.have.property('icon');
      res[0].should.have.property('feelslike');
      res[0].should.have.property('pop');
      return done();
    });
  });

  it('.hourly10day', function(done) {
    client.hourly10day('', function(err, res) {
      if (err) return done(err);
      res.should.be.an.array;
      res.length.should.be.above(10);
      res[0].should.have.property('FCTTIME');
      res[0].should.have.property('temp');
      res[0].should.have.property('icon');
      res[0].should.have.property('feelslike');
      res[0].should.have.property('pop');
      return done();
    });
  });


  it('.hourly10day #opts', function(done) {
    client.hourly10day(opts, function(err, res) {
      if (err) return done(err);
      res.should.be.an.array;
      res.length.should.be.above(10);
      res[0].should.have.property('FCTTIME');
      res[0].should.have.property('temp');
      res[0].should.have.property('icon');
      res[0].should.have.property('feelslike');
      res[0].should.have.property('pop');
      return done();
    });
  });
});
