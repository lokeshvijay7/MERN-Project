import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name : {
    type : "string",
    required : true,
  },
  price : {
    type : "number",
    required : true,
  },
  image : {
    type : "string",
    required : true,
  },
}, {
  timestamps : true,
})

const product = mongoose.model("Product", productSchema);
export default product;
