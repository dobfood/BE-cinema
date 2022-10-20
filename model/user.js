import mongoose from "mongoose";
const UserSchesma = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  email: { type: "String", required: true, unique: true },
  password: { type: "String" },
  img:{
    type:"String"
  },
  fromGoogle:{
    type:"Boolean",
    default: false
  },
  watched:{
    type:"Number",
    default:0
  }

},{timestamps:true});
export default mongoose.model("User",UserSchesma)
