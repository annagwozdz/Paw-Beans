import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    age: Number,
    species: String,
    breed: String,
    neutered: Boolean,
    gender: String,
    location: String,
    human: String,
    bio: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;