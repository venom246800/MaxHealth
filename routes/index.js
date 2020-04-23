var express = require("express");
var router = express.Router();

// Mongoose
var mongoose = require("mongoose");

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");
var BoughtTogether = require("../models/boughtTogether.js");



// Landing page route
router.get("/", function (req, res) {
    res.render("landing.ejs");
});


// Featured page route
router.get("/featured", function (req, res) {
    Product.find({}, function (err, foundProducts) {
        if (err) {
            console.log("Unable to find products from db");
            res.redirect("/");
        } else {
            res.render("featured.ejs", { products: foundProducts });
        }
    });

});


// OTC -> Over The Counter(Non-Prescription drugs)
router.get("/otc", function (req, res) {
    Product.find({}, function (err, foundProducts) {
        if (err) {
            console.log("Unable to find products from db");
            res.redirect("/");
        } else {
            res.render("otc.ejs", { products: foundProducts });
        }
    });

});


// Show OTC product route
router.get("/otc/:id", function (req, res) {
    var id = req.params.id;

    Product.findById(id, function (err, foundProduct) {
        if (err) {
            console.log("Unable to find product");
            res.redirect("/otc");
        } else {
            fetchBoughtTogetherProducts(res, id, foundProduct, renderShowPage);
        }
    });


});


function fetchBoughtTogetherProducts(res, id, foundProduct, callback) {
    BoughtTogether.find({ items: id }, function (err, data) {
        var IdArr = [];
        data.some(function (obj, index) {
            if(IdArr.length>=6){   // fix number of suggested products
                return true; // to break the loop
            }
            var secondItemIndex = 1 - obj.items.indexOf(id);
            IdArr.push(new mongoose.Types.ObjectId(obj.items[secondItemIndex]));
        });
        console.log(IdArr);
        callback(res, foundProduct, IdArr);
    }).sort({ support: -1 });

}

function renderShowPage(res, foundProduct, IdArr) {
    //console.log(IdArr);

    Product.find({ _id: { $in: IdArr } }, function (err, suggestedProducts) {
        if (err) {
            console.log(err);
        } else {
            suggestedProducts.forEach(function (suggestedProduct, index) {
                console.log(suggestedProduct.name);
            });
            res.render("show.ejs", { foundProduct: foundProduct, suggestedProducts: suggestedProducts});
        }

    });

}


module.exports = router;