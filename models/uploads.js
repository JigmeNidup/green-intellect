import { Schema, model, models } from "mongoose";

const uploadSchema = new Schema({
  uid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  did: {
    type: Schema.Types.ObjectId,
    ref: "Disease",
  },
});

const Upload = models.Upload || model("Upload", uploadSchema);

export default Upload;
