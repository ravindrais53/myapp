var { getEmplList, editEmp } = require('./service');

var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/empList', (req, res) => {
  res.send(getEmplList())
})

app.get('/editEmp', (req, res) => {
  res.send(editEmp(req, res));
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});