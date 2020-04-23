var express = require("express");
var app = express();
var port = 3000;

// MongoDB and mongoose
var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/maxhealth", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://sahil:mMfYcT1va5s0USIp@cluster0-b5tqv.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true });
// mongodb+srv://sahil:<password>@cluster0-b5tqv.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://sahil:<password>@cluster0-b5tqv.mongodb.net/test

// Body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Method-Override
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Models
var Product = require("./models/product.js");
var User = require("./models/user.js");
var Transaction = require("./models/transaction.js");
var BoughtTogether = require("./models/boughtTogether.js");

// Auth
var expressSession = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

app.use(expressSession({
    secret: "Our Project name is maxhealth",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// Seed DB
var seedDb=require("./seed.js");
seedDb();

// Custom stylesheets
app.use(express.static(__dirname + "/public"));

// import data array from seed file
var data=require("./seed.js");

// Setup Routes
var authRoutes = require("./routes/auth.js");
var indexRoutes = require("./routes/index.js");
var blogRoutes = require("./routes/blog.js");
var searchRoutes = require("./routes/search.js");
var cartRoutes = require("./routes/cart.js");
var transactionRoutes = require("./routes/transaction.js");

app.use(authRoutes);
app.use(indexRoutes);
app.use(blogRoutes);
app.use(searchRoutes);
app.use(cartRoutes);
app.use(transactionRoutes);


var fpgrowthAlgo=require("./fpgrowthAlgo.js");
fpgrowthAlgo;

app.get("/*",function(req,res){
    res.render("notFound.ejs");
});
app.listen(port, function () {
    console.log("server started on port " + port);
});
