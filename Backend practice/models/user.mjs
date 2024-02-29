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
    fullname : {
        type : String,
        required : true,
    }
})

const registerUser = mongoose.model('User' , registerSchema)

export default registerUser
