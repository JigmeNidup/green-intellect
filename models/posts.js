import { Schema, model, models } from "mongoose";

const postsSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Titile is required"],
  },
  des: {
    type: String,
  },
  image: {
    type: String,
  },
  tag: {
    type: String,
  },
});

const Posts = models.Posts || model("Posts", postsSchema);

export default Posts;
