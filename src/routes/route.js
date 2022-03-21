const express = require("express")
const router = express.Router()

//for test 
router.get("/test", (req, res) => {
    const body = req.body
    const query = req.query
    return res.send({status: "working", body: body, query: query})
})

module.exports = router