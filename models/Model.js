const mongoose = require("mongoose")

const ModelSchema = new mongoose.Schema({
  test: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Model", ModelSchema)
