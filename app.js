/* 코드 반드시 알기! */

var express = require('express');  // express == function
var app = express();

app.locals.pretty = true;
app.set('view engine', 'pug'); /* Template Engine Setting */
app.set('views', './views');

app.use(express.static('public'));  // 정적 파일 활용

app.get('/template', function(req, res) { /* Template Engine */
  res.render('temp', {time: Date(), title: 'Pug'});
});

app.get('/', function(req, res) {  // get(): Router / get()가 하는 일: Routing / Rout: finding ways
  res.send('Hello homepage');
});

app.get('/dynamic', function(req, res) {  // 동적 파일 생성
  var lis = '';
  for (var i=0; i<5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    Hello, Dynamic!
    <ul>${lis}</ul>
    ${time}
  </body>
  </html>`;
  res.send(output);
});

app.get('/route', function(req, res) {
  res.send('Hello Router, <img src="/dog.jpg">');
});

app.get('/login', function(req, res) {
  res.send('<h1>Login please</h1>');
});

app.listen(3000, function() {
  console.log('Connected 3000 port!');
});