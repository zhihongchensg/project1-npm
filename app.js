var express = require ('express')

var app = express () // this is like connect
var port = 3000

// require path
// var path = require('path')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {name: 'test'})
})

app.listen(port)
console.log('server running at http://localhost:' + port + '/')
