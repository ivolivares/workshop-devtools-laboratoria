var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database');
var app = express();
var port = process.env.PORT || 8080;

///mongoose.connect(database.localURL);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());


require('./app/routes.js')(app);

app.listen(port);
console.log("APP Initialized : http://localhost:" + port);