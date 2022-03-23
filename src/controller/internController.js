const mongoose = require("mongoose")

const internModel = require("../model/internModel")
const collegenModel = require("../model/collegeModel")

const createIntern = async (req, res) => {
    try{
        const data = req.body
        if (!data.collegeName){
            return res.status(400).send({status: false, msg: "Enter college name"})
        }
        const collage = await collegenModel.findOne({fullName: data.collegeName})
        if (!collage){
            return res.status(404).send({status: false, msg: "Enter valid college name"})
        }
        data.collegeId = collage._id
        // return res.send({data: data.mobile.length})
        // if (!data.mobile.length < 12){
        //     return res.status(400).send({status: false, msg: "not a valid mobile number"})
        // }
        const intern = await internModel.create(data)
        return res.status(201).send({status: true, data: intern})
    }catch(e){
        return res.status(400).send({status: false, msg: e.message})
    }
}


module.exports.createIntern = createIntern
