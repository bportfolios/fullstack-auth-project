import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Default_Profile_Picture.png",
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
export default User;
