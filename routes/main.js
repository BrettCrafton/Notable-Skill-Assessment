const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main")

//API Routes 
router.get("/", mainController.getIndex)

//Main Routes 
router.get("/", mainController.getIndex)

router.get("/", mainController.getIndex)

router.post("/formSubmission", mainController.formSubmission)

router.post("/formSubmission", mainController.formSubmission)

router.delete("/delete", mainController.delete)

router.delete("/delete", mainController.delete)

module.exports = router
