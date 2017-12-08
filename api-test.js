var express = require('express')
var app = express()
var compression = require('compression')

app.use(compression({ threshold: 0 }))
app.use(express.static(__dirname + '/dist'))

app.get('/backend/users', function (req, res) {
  res.send({
    status: 200,
    data: [{
      username: 'abc',
      fullname: 'abc def',
      role: 'admin'
    },
    {
      username: 'abc 2',
      fullname: 'abc def',
      role: 'admin'
    },
    {
      username: 'abc 4',
      fullname: 'abc 4 def',
      role: 'regular'
    }]
  })
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
