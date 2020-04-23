var mongoose=require("mongoose");

// Product - name, image, price, category, description

var productSchema=new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: String,
    description: {
        about: String,
        ingredients: String,
        benefits: String,
        dosage: String,
        storage: String,
        safety: String
    }
});

var Product=mongoose.model("Product", productSchema);

module.exports=Product;