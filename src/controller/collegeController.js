const express = require("express")

const collegeModel = require("../model/collegeModel")
const internModel = require("../model/internModel")

const createCollege = async (req, res) => {
    const data = req.body
    try{
        const college = await collegeModel.create(data)
        return res.status(201).send({status: true, data: college})
    }catch(e){
        return res.status(400).send({status: false, message: e.message})
    }
}

const getCollege = async (req, res) => {
    try{
        const {collegeName} = req.query
        const college = await collegeModel.findOne({name: collegeName}).select({isDeleted: 0})
        const newCollege = JSON.parse(JSON.stringify(college))
        if (!college){
            return res.status(400).send({status: false, msg: "college not found"})
        }
        const id = college._id 
        const interns = await internModel.find({collegeId: id})
        // return res.send(interns)
        newCollege.interests = [...interns]
        // console.log(newCollege.interests)
        return res.status(200).send({status: true, data: newCollege})
    }catch(e){
        return res.status(400).send({status: false, msg: e.message})
    }
}

module.exports.createCollege = createCollege
module.exports.getCollege = getCollege