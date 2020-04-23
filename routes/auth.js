var express = require("express");
var router=express.Router();

// Auth
var passport=require("passport");

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");

// Login page route
router.get("/login", function (req, res) {
    res.render("login.ejs");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/featured",
    failureRedirect: "/login"
}), function (req, res) {

});


// Sign Up page route
router.get("/signup", function (req, res) {
    res.render("signup.ejs");
});

router.post("/signup", function (req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email }),
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.render("signup.ejs");
            }
            passport.authenticate("local")(req, res, function () {
                res.redirect("/featured");
            });
        });
});


// Logout Route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
});


module.exports = router;