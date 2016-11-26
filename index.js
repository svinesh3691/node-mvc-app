// File : index.js --> 							

//Requires+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express 		= require('express');
var app         	= express();
var parser 		= require('body-parser');
var http	 	= require('http');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Uses+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.set('view engine', 'ejs');
var routes                	= require('./config/routes')(app);		

//Create-server++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
http.createServer(app).listen(8081,function(){	
  console.log("Connected & Listen to port 8081");
});												
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
