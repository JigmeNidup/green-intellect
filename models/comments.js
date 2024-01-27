import { Schema, model, models } from "mongoose";

const commentsSchema = new Schema({
  //commenter
  uid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  //post commented on
  pid: {
    type: Schema.Types.ObjectId,
    ref: "Posts",
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
  },
  edited: {
    type: Boolean,
  },
  like: {
    type: Number,
  },
});

const Comments = models.Comments || model("Comments", commentsSchema);

export default Comments;
