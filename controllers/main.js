const Model = require("../models/Model")
const Doctor = require("../models/Doctor")
const Appointment = require("../models/Appointment")

module.exports = {
  getIndex: async (req, res) => {
    try{
      res.render("index.ejs", {})
    } catch (err) {
    console.log(err)
    res.send(err.message)
    }
  },
  formSubmission: async (req, res) =>{
    try{

        await Model.create({
        })
        console.log("Added to DB")
      res.redirect('back')
      
    } catch (err) {
      console.log(err)
      res.send(err.message)
    }
  },
  delete: async (req, res) => {
    try {
      await Model.deleteOne({ _id: req.params.id })
      console.log("Deleted")
      res.redirect('back')
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

}
