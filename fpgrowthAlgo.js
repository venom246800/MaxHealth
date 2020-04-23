var express = require("express");

// Model
var Transaction = require("./models/transaction.js");
var BoughtTogether = require("./models/boughtTogether.js");


function generateTransactionArr(callback) {
    var allTransactionArr = [];
    console.log("Generating allTransactionArr...");
    Transaction.find({}, function (err, foundTransactions) {
        if (err) {
            console.log(err);
        } else {

            foundTransactions.forEach(function (transaction, index) {
                allTransactionArr.push(transaction.pIds);
            });

            console.log(allTransactionArr);
            console.log("Successfully Generated allTransactionArr");
            callback(allTransactionArr);

        }

    });

}

function fpgrowthAlgo(allTransactionArr) {
    var fpgrowth = require("node-fpgrowth");
    var fpgrowth = new fpgrowth.FPGrowth(.2);

    console.log(`Executing FPGrowth...`);

    var boughtTogetherArr = [];

    // Returns itemsets 'as soon as possible' through events.
    fpgrowth.on('data', function (itemset) {
        // Do something with the frequent itemset.
        var support = itemset.support;
        var items = itemset.items;
        //console.log(`Itemset { ${items.join(',')} } is frequent and have a support of ${support}`);

        if (items.length == 2) {
            boughtTogetherArr.push(itemset);
        }

    });

    // Execute FPGrowth on a given set of transactions.
    fpgrowth.exec(allTransactionArr)
        .then(function (itemsets) {
            // Returns an array representing the frequent itemsets.

            // Clear Boughttogether db and recreate it
            console.log(allTransactionArr);
            console.log("sdoivjfdlvjfdlvlnsjdk"+boughtTogetherArr);
            BoughtTogether.deleteMany({}, function (err, deletedData) {
                if (err) {
                    console.log(err);
                } else {
                    // recreate boughttogeteher array
                    BoughtTogether.create(boughtTogetherArr, function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                            console.log("-----------------------------------------");
                        }
                    });
                }

            });

            console.log(`Finished executing FPGrowth. ${itemsets.length} frequent itemset(s) were found.`);
            console.log(itemsets);
        });
}



module.exports = generateTransactionArr(fpgrowthAlgo);