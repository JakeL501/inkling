var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//location of our static files(css,js,etc..)
app.use(express.static(__dirname + '/public'));

//set the view engine to use ejs
app.set('view engine', 'ejs');

ig.use({
    client_id: 'df227a4bb2a34fceae540911709167b1',
    client_secret: '7e4598b2c77d48dd9616edd7bd7ca971'
});

//the redirect uri we set when registering our application
var redirectUri = 'http://localhost:3000/handleAuth';