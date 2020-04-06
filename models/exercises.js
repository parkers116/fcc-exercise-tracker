const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var exercisesSchema = new Schema(
  {
    userId: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: {
      type: Number,
      default: new Date()
    }
  },
  { collection: "Exercises" }
);

mongoose.model("Exercises", exercisesSchema);
