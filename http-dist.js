var express = require('express')
var app = express()
var compression = require('compression')

app.use(compression({ threshold: 0 }))
app.use(express.static(__dirname + '/dist'))

app.all('/*', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/dist' })
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
