/* 코드 반드시 알기! */

var express = require('express');  // express == function
var app = express();

app.get('/', function(req, res) {  // get(): Router / get()가 하는 일: Routing / Rout: finding ways
  res.send('Hello homepage');
});
app.get('/login', function(req, res) {
  res.send('<h1>Login please</h1>');
});
app.listen(3000, function() {
  console.log('Connected 3000 port!');
});