const mongoose = require("mongoose")

// Doctors should have a unique ID, a first name, and a last name.

const DoctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Doctor", DoctorSchema)
