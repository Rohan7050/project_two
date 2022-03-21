const express = require("express")
const router = express.Router()

const collegeController = require("../controller/collegeController")
const internController = require("../controller/internController")

//for test 
router.get("/test", (req, res) => {
    const body = req.body
    const query = req.query
    return res.send({status: "working", body: body, query: query})
})

// for college
router.post("/colleges", collegeController.createCollege)


// for intern

module.exports = router