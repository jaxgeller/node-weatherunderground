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
```

---
# Examples

```js
var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here', 'Washington', 'DC');

client.conditions(function(err, data) {
  if (err) throw err;
  else console.log(data);
});

client.hourly10day(function(err, data) {
  if (err) throw err;
  else console.log(data);
});
```


---
# Api

## WundergroundClient(apiKey, city, state)
Init a new Wunderground client for API use

### Params:

* **String** *apiKey* - the Wunderground api key

* **String** *city* - city for weather data

* **String** *state* - state for weather data

## conditions(callback)

Gets conditions for a specific location

### Params: 

* **Function** *callback* - returns err, data

## forecast(callback)

Gets forecast for a specific location

### Params: 

* **Function** *callback* - returns err, data

## forecast10day(callback)

Gets forecast 10 days in advance for a specific location

### Params: 

* **Function** *callback* - returns err, data

## hourly(callback)

Gets hourly conditions for a specific location

### Params: 

* **Function** *callback* - returns err, data

## hourly10day(callback)

Gets hourly conditions 10 days in advance for a specific location

### Params: 

* **Function** *callback* - returns err, data