# node-weatherunderground

[![Build Status](https://travis-ci.org/jacksongeller/node-weatherunderground.svg)](https://travis-ci.org/jacksongeller/node-weatherunderground)



# Install
`$ npm install node-weatherunderground --save`


# Use

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here', 'Washington', 'DC');
```

All parameters are optional at the point of init, you can change them later by adding in an object
```js
var Wunderground = require('wunderground-api');
var client = new Wunderground();
```

# Examples

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here', 'Washington', 'DC');

client.conditions('', function(err, data) {
  if (err) throw err;
  else console.log(data);
});

client.hourly10day('', function(err, data) {
  if (err) throw err;
  else console.log(data);
});
```

No config at the point of init

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground();
var opts = {
  key:'your api key here', 
  city:'Washington', 
  state: 'DC'
}

client.conditions(opts, function(err, data) {
  if (err) throw err;
  else console.log(data);
});

client.hourly10day(opts, function(err, data) {
  if (err) throw err;
  else console.log(data);
});
```

Half init, opts will always overwrite init

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here');
var opts = {
  city:'Washington', 
  state: 'DC'
}

client.conditions(opts, function(err, data) {
  if (err) throw err;
  else console.log(data);
});

client.hourly10day(opts, function(err, data) {
  if (err) throw err;
  else console.log(data);
});
```


# Config Api

## WundergroundClient(apiKey, city, state)
Init a new Wunderground client for API use, all params optional at init and can be overwritten

### Params:

* **String** *apiKey* - the Wunderground api key

* **String** *city* - city for weather data

* **String** *state* - state for weather data

## Opts
Optional object passed into API

### Props
* **String** *key* - wunderground key
* **String** *city* - city
* **String** *state* - state


# API

## conditions(opts, callback)

Gets conditions for a specific location

### Params: 

* **Object** *opts* - optional object that bypasses initting a client
* **Function** *callback* - returns err, data

## forecast(opts, callback)

Gets forecast for a specific location

### Params: 

* **Object** *opts* - optional object that bypasses initting a client
* **Function** *callback* - returns err, data

## forecast10day(opts, callback)

Gets forecast 10 days in advance for a specific location

### Params: 

* **Object** *opts* - optional object that bypasses initting a client
* **Function** *callback* - returns err, data

## hourly(opts, callback)

Gets hourly conditions for a specific location

### Params: 

* **Object** *opts* - optional object that bypasses initting a client
* **Function** *callback* - returns err, data

## hourly10day(opts, callback)

Gets hourly conditions 10 days in advance for a specific location

### Params: 

* **Object** *opts* - optional object that bypasses initting a client
* **Function** *callback* - returns err, data
