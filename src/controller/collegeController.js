const express = require("express")

const collegeModel = require("../model/collegeModel")
const internModel = require("../model/internModel")

const createCollege = async (req, res) => {
    const data = req.body
    if (!data.name){
        return res.status(400).send({status: false, message: "please enter name"})
    }
    if (!data.fullName){
        return res.status(400).send({status: false, message: "please enter fullName"})
    }
    if (!data.logoLink){
        return res.status(400).send({status: false, message: "please enter logolink"})
    }
    try{
        const college = await collegeModel.create(data)
        return res.status(201).send({status: true, data: college})
    }catch(e){
        return res.status(500).send({status: false, message: e.message})
    }
}

const getCollege = async (req, res) => {
    try{
        const {collegeName} = req.query
        if (!collegeName){
            return res.status(400).send({status: false, msg: "please enter college name"})
        }
        const college = await collegeModel.findOne({name: collegeName.toLowerCase()}).select({isDeleted: 0, createdAt: 0, updatedAt: 0})
        if (!college){
            return res.status(404).send({status: false, msg: "college not found"})
        }
        const newCollege = JSON.parse(JSON.stringify(college))
        const id = college._id 
        const interns = await internModel.find({collegeId: id}).select({isDeleted: 0, createdAt: 0, updatedAt: 0, collegeId: 0})
        // return res.send(interns)
        newCollege.interests = [...interns]
        // console.log(newCollege.interests)
        return res.status(200).send({status: true, data: newCollege})
    }catch(e){
        return res.status(500).send({status: false, msg: e.message})
    }
}

module.exports.createCollege = createCollege
module.exports.getCollege = getCollege