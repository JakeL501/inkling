//middleware
const express = require('express');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
//additional dependencies for Auth----
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
//-------------------------------------

const PORT = process.env.PORT || 3001;

//instagram
const ig = require('instagram-node').instagram();
var accessToken = '7229099483.1677ed0.8721a2a4706247f5a302ae9ed22e38bf';

//tag search 
"https://api.instagram.com/v1/tags/search?q="//+hashTag+
"&access_token="+accessToken;

// //express connection
// const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests and axios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

app.use(cookieParser()); // read cookies (needed for auth)
 

// INSTAGRAM API SERVER STUFF ---- prob API utils later
ig.use({
    client_id: '896e848e88374638bcc9d7c05daf16d4',
    client_secret: 'b324a1ce02954cbb80e7062a8505814d'
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
        res.render('../views/pages/index.ejs', { instagram : result });
    });
   
});

///------------------------------- user authentication
//our models
var model = require("./models")

//passport - user authentication - local
// required for passport
require('./config/passport/passport')(passport, model.User); // pass passport for configuration
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/api/authroute.js')(app, passport); // load our routes and pass in our app and fully configured passport

//------------------------------------


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/inkling",
//   {
//     useMongoClient: true
//   }
);

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });