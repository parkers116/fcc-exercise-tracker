const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var exercisesSchema = new Schema(
  {
    original_url: String,
    short_url: Number
  },
  { collection: "Exercises" }
);

mongoose.model("Exercises", exercisesSchema);
