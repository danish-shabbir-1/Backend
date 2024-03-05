import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const { Schema } = mongoose;


const registerSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    pass  : {
        type : String,
        required : true,
        minLength: 6
    },
    fullname : {
        type : String,
        required : true,
    }
})

const RegisterUser = mongoose.model('users' , registerSchema)

export default RegisterUser
