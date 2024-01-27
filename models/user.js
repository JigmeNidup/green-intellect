import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  image: {
    type: String,
  },
  subscribed: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
