var express = require("express");
var router=express.Router();

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");


// Search Route
router.get("/search", function (req, res) {
    res.redirect("/featured");
});

router.post("/search", function (req, res) {
    var searchText = req.body.searchText;
    if (searchText.length != 0) {
        Product.find({ "name": { $regex: searchText, $options: "i" } },
            function (err, foundProducts) {
                if (err) {
                    console.log(err);
                    res.redirect("back");
                } else {
                    res.render("search.ejs", { products: foundProducts });
                }
            });
    } else {
        res.redirect("back");
    }
});


module.exports = router;