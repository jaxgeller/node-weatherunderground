# wunderground-api

[![Build Status](https://travis-ci.org/jacksongeller/wunderground-api.svg)](https://travis-ci.org/jacksongeller/wunderground-api)


---
# Install
`$ npm install wunderground-api --save`


---
# Use

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here', 'Washington', 'DC');
// or

var client = new Wunderground();

/*
  All of the parameters are optional at the point of init. you can supply them later in the API calls
 */
```

---
# Examples

```js
// Classic init
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

```js
// No init
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

```js
// half init
// opts will always overwrite init
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

---
# Api

## WundergroundClient(apiKey, city, state)
Init a new Wunderground client for API use, all params optional at init and can be overwritten

### Params:

* **String** *apiKey* - the Wunderground api key

* **String** *city* - city for weather data

* **String** *state* - state for weather data

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
