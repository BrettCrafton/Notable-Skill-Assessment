const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main")

//API Routes 
router.get("/doctors", mainController.doctors)

router.get("/appointments/:doctor/:date", mainController.appointments)

//Main Routes 
router.get("/", mainController.getIndex)

router.get("/getappointments/:doctorId/:date", mainController.getAppointments)

router.post("/newAppointment", mainController.newAppointment)

router.delete("/deleteAppointment/:id", mainController.deleteAppointment)

module.exports = router
