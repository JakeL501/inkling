//middleware
const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");

//instagram
const ig = require('instagram-node').instagram();
const accessToken = '7120141032.1677ed0.f0506cabd0554bb99892f635b7db49f6';

//express connection
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests and axios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
 

// INSTAGRAM API SERVER STUFF ---- prob API utils later
 ig.use({
    client_secret: '7e4598b2c77d48dd9616edd7bd7ca971'
});

//the redirect uri we set when registering our application
var redirectUri = 'http://localhost:3000/handleAuth';

app.get('/authorize', function(req, res){
    // set the scope of our application to be able to access likes and public content
    res.redirect(ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']}) );
});

app.get('/handleAuth', function(req, res){
    //retrieves the code that was passed along as a query to the '/handleAuth' route and uses this code to construct an access token
    ig.authorize_user(req.query.code, redirectUri, function(err, result){
        if(err) res.send( err );
    // store this access_token in a global variable called accessToken
        accessToken = result.access_token;
    // After getting the access_token redirect to the '/' route
        res.redirect('/');
    });
})

app.get('/', function (req, res) {
    ig.use({ 
        access_token: accessToken 
    }); 
    
    ig.user_media_recent(accessToken.split('.')[0], function(err, result, pagination, remaining, limit) {
        if(err) res.json(err);
     // pass the json file gotten to our ejs template 
        // res.send({instagram : result})
        res.render('pages/index', { instagram : result });
    });
   
});
///-------------------------------

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inkling",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });