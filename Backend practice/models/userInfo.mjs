import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const registerSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  pass: {
    type: String,
    required: true,
    minLength: 6,
  },
  fullname: {
    type: String,
    required: true,
  },
});

registerSchema.pre("save", function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.pass, salt);

  user.pass = hash

  next()
});

registerSchema.methods.comparepass = function (pass) {  
    const user = this 
    
    return bcrypt.compareSync(pass, user.pass)
}

const RegisterUser = mongoose.model("users", registerSchema);

export default RegisterUser;
