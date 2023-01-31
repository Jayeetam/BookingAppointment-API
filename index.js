var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const connection = require('./connection');
const userRoute = require('./routes/user');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/user', userRoute)



app.listen(5000);