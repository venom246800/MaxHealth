var express = require("express");
var router=express.Router();

// Models
var Product = require("../models/product.js");
var User = require("../models/user.js");


// Cart route
router.get("/cart", isLoggedIn, function (req, res) {
    User.findById(req.user.id).populate({ path: "cart.item", model: "Product" }).exec(function (err, populatedUser) {
        if (err) {
            console.log(err);
        } else {
            res.render("cart.ejs", { user: populatedUser });
        }
    });
});

router.put("/cart", isLoggedIn, function (req, res) {
    var userId = req.user.id;
    var productId = req.body.productId;
    var quantity = req.body.selectQuantity;
    var productPrice = req.body.productPrice;
    var totalAmount = productPrice * quantity;

    User.findById(userId, function (err, foundUser) {
        if (err) {
            console.log(err);
            res.redirect("/otc/productId");
        } else {
            Product.findById(productId, function (err, foundProduct) {
                if (err) {
                    console.log(err);
                    res.redirect("/otc");
                } else {
                    foundUser.cart.some(function (itemDetail, index) {  // same as foreach loop
                        if (itemDetail.item == foundProduct.id) {
                            // update cart amount
                            foundUser.cartAmount = foundUser.cartAmount - itemDetail.totalAmount;
                            //delete whole product object
                            foundUser.cart.splice(index, 1);
                            return true;  // to break the loop
                        }
                    });

                    var productDetailObj = { item: foundProduct, quantity: quantity, totalAmount: totalAmount };
                    foundUser.cart.push(productDetailObj);
                    // update cart amount
                    foundUser.cartAmount = foundUser.cartAmount + totalAmount

                    foundUser.save(function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            User.findById(userId).populate({ path: "cart.item", model: "Product" }).exec(function (err, populatedUser) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    res.render("cart.ejs", { user: populatedUser });
                                }
                            });
                        }
                    });

                }
            });
        }
    });

});

router.delete("/cart", isLoggedIn, function (req, res) {
    var productId = req.body.deleteProduct;
    User.findById(req.user.id, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            foundUser.cart.some(function (itemDetail, index) {
                if (itemDetail.item == productId) {
                    // update cart amount
                    foundUser.cartAmount = foundUser.cartAmount - itemDetail.totalAmount;
                    // delete whole product object
                    foundUser.cart.splice(index, 1);
                    return true;
                }
            });

            foundUser.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect("/cart");
                }
            });

        }
    });
});

// Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }
}

module.exports = router;