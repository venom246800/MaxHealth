var express = require("express");
var router = express.Router();

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");


// Blog route
router.get("/blog", function (req, res) {
    res.render("blog.ejs");
});

module.exports = router;