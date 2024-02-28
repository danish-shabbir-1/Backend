import mongoose from "mongoose";
const { Schema } = mongoose;


const registerSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    Pass  : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    }
})
