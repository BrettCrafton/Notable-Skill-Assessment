const mongoose = require("mongoose")

//Appointments should have a unique ID, patient first name, patient last name, date & time, and kind (New Patient or Follow Up.)
//In addition, I added the doctor, and doctorId field for the types of GET requests made.

const AppointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Appointment", AppointmentSchema)
