const mongoose = require("mongoose");

const { Schema } = mongoose;

const mentalLogModel = new Schema({
  anxiety: { type: Number },
  mood: { type: Number },
  sleepQuality: { type: Number },
  hoursSleep: { type: Number },
  stress: { type: Number },
  user: { type: String },
  logDate: { type: Date },
});

module.exports = mongoose.model("MentalLog", mentalLogModel);
