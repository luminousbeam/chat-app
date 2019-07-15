var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var server = app.listen(3000, () => {
  console.log('server is listening on port ', server.address().port)
})
