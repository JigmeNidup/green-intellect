import { Schema, model, models } from "mongoose";

const diseaseSchema = new Schema({
  //name of disease
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  //name of model disease
  mname: {
    type: String,
    required: [true, "Model Name is Required"],
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
  },
  crop: {
    type: String,
  },
  language: {
    type: String,
  },
  recommend: {
    type: String,
  },

  des: {
    type: String,
    required: [true, "Description is Required"],
  },
  symptoms: {
    type: String,
  },
  treatment: {
    type: String,
  },
  prevents: {
    type: String,
  },
  causes: {
    type: String,
  },
  remark: {
    type: String,
  },
});

const Disease = models.Disease || model("Disease", diseaseSchema);

export default Disease;
