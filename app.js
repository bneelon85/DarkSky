const express = require('express')
const app = express()
const axios = require('axios')
const nunjucks = require('nunjucks')
var MapboxClient = require('mapbox')
app.use(express.static('public'))

var client = new MapboxClient('pk.eyJ1IjoiYm5lZWxvbjg1IiwiYSI6ImNqaTEzdXNrdDFleXAza3A4NnRhMHA1dWIifQ.tTA-_KBfu2gQXn7N2GBsIw')

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
})

apiKey = '4c30e6b1abe22359b3f59349d9c40c90'

app.get('/', function (req, res) {
  client.geocodeForward('77459')
    .then(function (res) {
    // res is the http response, including: status, headers and entity properties
      var data = res.entity // data is the geocoding result as parsed JSON
      console.log(data.features[0].center[1])
    })
    .catch(function (err) {
    // handle errors
    })
  res.render('index.html')
})

app.listen(8000, function () {
  console.log('Listening on port 8000')
})
