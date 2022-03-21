const e = require("express")
const collaegeModel = require("../model/collegeModel")

const createCollege = async (req, res) => {
    const data = req.body
    try{
        const college = await collaegeModel.create(data)
        return res.status(201).send({status: true, data: college})
    }catch(e){
        return res.status(400).send({status: false, message: e.message})
    }
}



module.exports.createCollege = createCollege