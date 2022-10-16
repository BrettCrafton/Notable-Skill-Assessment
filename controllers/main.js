const Doctor = require("../models/Doctor")
const Appointment = require("../models/Appointment")

module.exports = {
  getIndex: async (req, res) => {
    try{
      const doctors = await Doctor.find()
      let appointments = []
      res.render("index.ejs", {doctors: doctors, appointments: appointments})
    } catch (err) {
    console.log(err)
    res.send(err.message)
    }
  },
  doctors: async (req, res) => {
    try{
      //serve json when requested at /doctors
      const doctors = await Doctor.find()
      res.json(doctors)
    } catch (err) {
    console.log(err)
    res.send(err.message)
    }
  },
  appointments: async (req, res) => {
    try{
      //serve json when requested at /appointments/:doctor/:date
      const appointments = await Appointment.find({doctor: req.params.doctor, date: req.params.date})
      res.json(appointments)
    } catch (err) {
    console.log(err)
    res.send(err.message)
    }
  },
  getAppointments: async (req, res) => {
    try{
      const appointments = await Appointment.find({doctorId: req.params.doctorId, date: req.params.date})
      const doctors = await Doctor.find()
      res.render("index.ejs", {doctors: doctors, appointments: appointments})
    } catch (err) {
    console.log(err)
    res.send(err.message)
    }
  },
  newAppointment: async (req, res) =>{
    try{
        await Appointment.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          date: req.body.date,
          time: req.body.time,
          kind: req.body.kind,
          doctor: JSON.parse(req.body.doctor).name,
          doctorId: JSON.parse(req.body.doctor).id
        })
        console.log("Appointment has been added!")
      res.redirect('back')
      
    } catch (err) {
      console.log(err)
      res.send(err.message)
    }
  },
  deleteAppointment: async (req, res) => {
    try {
      // Delete appointment from DB
      await Appointment.deleteOne({ _id: req.params.id })
      console.log("Deleted Appointment")
      res.redirect('back')
    } catch (err) {
      console.log(err)
      res.send(err.message)
    }
  }
}
