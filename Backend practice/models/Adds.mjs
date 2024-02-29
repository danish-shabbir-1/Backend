import mongoose from "mongoose";

const { Schema } = mongoose;


const AddSchema = new Schema({
   Title: {
      type: String,
      required: true
  },
  Description: {
      type: String,
      required: true
  },
  Amount: {
      type: Number,
      required: true
  },
  });

  const Adds = mongoose.model('adds', AddSchema)

  export default Adds;