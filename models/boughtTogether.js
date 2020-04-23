var mongoose = require("mongoose");


var boughtTogetherSchema = new mongoose.Schema({
    items: [],
    support: Number
});



// var boughtTogetherSchema = new mongoose.Schema({
//     boughtTogether: [
//         {
//             items: [],
//             support: Number
//         }
//     ],
// });

var BoughtTogether = mongoose.model("BoughtTogether", boughtTogetherSchema);

module.exports = BoughtTogether;
