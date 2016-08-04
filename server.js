var express = require('express');
var path =  require('path');
var bodyParser = require('body-parser');
var app = new express();
var fs = require('fs');
var request = require('request');

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/components/App').default;

app.set('port', process.env.PORT|| 5050);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});
app.get('/',function(req, res) {

	// console.log('express', routes)
	// console.log('names@@@@@@@@@@',req);

  var html = ReactDOM.renderToString(React.createElement(routes));
  var page = swig.renderFile('views/index.html', { html: html });
  res.status(200).send(page);
   
});

app.get('/names', function (req,res){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");


	fs.readFile( __dirname + "/app/sample/" + "users.json", 'utf8', function (err, data) {
       // console.log( 'readFile',data );
       // res.status(200);
       // res.setHeader('Content-Type', 'application/json');
       // // res.send(JSON.stringify({ a: 1 }));
       // res.json({ a: 1 });
       res.status(200).send(data);
   });
	
});

app.post('/savePost', function (req,res){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");



	fs.readFile( __dirname + "/app/sample/" + "users.json", 'utf8', function (err, data) {
       console.log( 'readFile',data );
       // res.status(200);
       // res.setHeader('Content-Type', 'application/json');
       // // res.send(JSON.stringify({ a: 1 }));
       // res.json({ a: 1 });
       // res.status(200).send(data);
   });
	
});


app.listen(app.get('port'), function(){
	console.log('server started succesfully', app.get('port'));
});