import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  rating: Number,
  supply: Number,
});

const ProductsModel = mongoose.model("Products", productSchema);

export default ProductsModel;
