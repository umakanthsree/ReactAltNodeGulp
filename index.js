var express = require('express');
var path =  require('path');
var bodyParser = require('body-parser');
var app = new express();

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/components');

app.set('port', process.env.PORT|| 5050);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname, 'public'));

// app.get('/',function (req,res){
//   // app.get('/index2.html',function (req,res){
// 	console.log('server started succesfully');
// 	// res.send('server started succesfully');
// 	res.sendFile('/index.html')
// });

app.use(function(req, res) {

  var html = ReactDOM.renderToString(React.createElement(routes.APP));
  var page = swig.renderFile('views/index.html', { html: html });
  res.status(200).send(page);
   
});

app.listen(app.get('port'), function(){
	console.log('server started succesfully', app.get('port'));
});