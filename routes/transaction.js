var express = require("express");
var router = express.Router();

// Body-parser
var bodyParser = require("body-parser");

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");
var Transaction = require("../models/transaction.js");


router.get("/cart/transaction", isLoggedIn, function (req, res) {
    res.send("Transaction get page");
});

router.post("/cart/transaction", isLoggedIn, function (req, res) {
    var cartAmount = req.body.cartAmount;

    User.findById(req.user.id, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            // create arr of items present in user's cart
            // and then save that array to transactions db
            generatePIdsArr(req, res, foundUser, cartAmount, saveArrToDb);
        }
    });
});



function generatePIdsArr(req, res, foundUser, cartAmount, callback) {
    var pIdsArr = [];
    foundUser.cart.forEach(function (itemDetails, index) {
        pIdsArr.push(itemDetails.item);
    });
    callback(req, res, pIdsArr, cartAmount);
}

function saveArrToDb(req, res, pIdsArr, cartAmount) {
    Transaction.create({ pIds: pIdsArr, cartAmount: cartAmount }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            // delete data from user's cart after checkout
            User.updateMany({ _id: req.user.id }, { $unset: { cart: 1, cartAmount: 1 } }, function (err, deletedData) {
                if (err) {
                    console.log(err);
                } else {
                    // run fpgrowth algo
                    var fpgrowthAlgo = require("../fpgrowthAlgo.js");
                    fpgrowthAlgo;
                    // render homepage or successful trasaction page
                    //res.redirect("/featured");
                }
            });
            // User.findById(req.user.id, function (err, foundUser) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         foundUser.cart.splice(0, cart.length);
            //         cartAmount = 0;
            //         foundUser.save(function (err, data) {
            //             if (err) {
            //                 console.log(err);
            //             } else {
            //                 // run fpgrowth algo
            //                 var fpgrowthAlgo = require("../fpgrowthAlgo.js");
            //                 fpgrowthAlgo;
            //                 // render homepage or successful trasaction page
            //                 res.redirect("/featured");
            //             }
            //         });
            //     }
            // });
        }
    });
}



// Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}


module.exports = router;
