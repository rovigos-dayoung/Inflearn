/* 코드 반드시 알기! */

var express = require('express');  // express == function
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'pug'); /* Template Engine Setting */
app.set('views', './views');

app.use(express.static('public'));  // 정적 파일 활용

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', function(req, res) {
  res.render('form');
});

app.get('/form_receiver', function(req, res) {  // get 방식
  var title = req.query.title;
  var description = req.query.description;
  res.send(title +  ', ' + description);
});

app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + ', ' + description);
});

app.get('/topic/:id', function(req, res) {
  var topics = [
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}`
  res.send(output);
});

app.get('/topic/:id/:mode', function(req, res) {
  res.send(req.params.id + ', ' + req.params.mode);
});

app.get('/template', function(req, res) { /* Template Engine */
  res.render('temp', {title: 'Pug', time: Date()});
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