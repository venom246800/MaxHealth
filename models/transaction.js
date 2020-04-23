var mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
    pIds: [
        String
    ],
    cartAmount: { type: Number, default: 0 }
});

var Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction