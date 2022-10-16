const Model = require("../models/Model")

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
  }
}
