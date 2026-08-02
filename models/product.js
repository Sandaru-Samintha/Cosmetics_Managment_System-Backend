import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    
  name :{
    type : String,
    required : true,
  },
  price :{
    type : String,
    required : true ,
  },
  description :{
    type : String,
    required : true,
  }

  })
const Product = mongoose.model("product",ProductSchema)

export default Product;