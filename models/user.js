import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type : String,
    required : true,
    unique : true,
  },
  firstName:{
    type: String,
    required:true,

  },
  lastName:{
    type : String,
    required:true,
  },
  password:{
    type : String,
    required:true,
  },
  role:{
    type : String,
    default : "customer"
  },
  isBlocked:{
    type: Boolean,
    required : true,
    default : false
  },
  img : {
    type : String,
    required : false,
    default : "https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
  }

})

const User = mongoose.model("user" , userSchema);

export default User;