import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
           
    timestamps: {
        type: Date,
        default: Date.now
    },   

});

const Product = mongoose.model("Products", productSchema);

export default Product