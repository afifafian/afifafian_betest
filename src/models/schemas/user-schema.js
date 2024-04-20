import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "username is required!"]
  },
  accountNumber: {
    type: String,
    required: [true, "account number is required!"]
  },
  emailAddress: {
    type: String,
    required: [true, "email address is required!"]
  },
  identityNumber: {
    type: String,
    required: [true, "identity number is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  },
});

export default UserSchema;
