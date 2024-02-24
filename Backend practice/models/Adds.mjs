import mongoose from "mongoose";

const { Schema } = mongoose;


const addSchema = new Schema({
   Title : {
    type : String,
    required : true
   },
   Description : {
    type : String,
    required : true
   },
   Amount : {
    type : Number,
    required : true
   }
  });

  const Adds = mongoose.model('add', addSchema)

  export default Adds;