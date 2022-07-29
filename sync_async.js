var fs = require('fs');

// Sync
console.log(1);   // 실행 순서: 1
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

// Async
console.log(2);   // 실행 순서: 2
fs.readFile('data.txt', {encoding: 'utf-8'}, function(err, data) {
  console.log(3); // 실행 순서: 4
  console.log(data);
})
console.log(4);   // 실행 순서: 3