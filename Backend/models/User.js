import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("User", User);
UserModel.createIndexes();

export default UserModel;
