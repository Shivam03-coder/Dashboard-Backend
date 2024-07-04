import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  city: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
  role: {
    type: String,
    enum: ["user", "admin", "superadmin"],
    default: "admin",
  },
});

const User = mongoose.model("user", userSchema);

export default User;
