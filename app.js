var http = require('http');
var url = require('url');
var express = require('express');
var path = require('path');
var bodyParser = require('bodyParser');
var dbase = require('baseDonnee');


var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname +'/index.html'));
})
.post('/post/', function (req, res){

})


app.listen(8080);