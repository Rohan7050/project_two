const mongoose = require("mongoose")

const internModel = require("../model/internModel")
const collegenModel = require("../model/collegeModel")

const createIntern = async (req, res) => {
    try{
        const data = req.body
        if (Object.keys(data).length == 0){
            return res.status(400).send({status: false, msg: "Enter detailse"})
        }
        if (!data.collegeName){
            return res.status(400).send({status: false, msg: "Enter college name"})
        }
        if (!data.name){
            return res.status(400).send({status: false, msg: "Enter name"})
        }
        if (!data.email){
            return res.status(400).send({status: false, msg: "Enter email"})
        }
        if (!data.mobile){
            return res.status(400).send({status: false, msg: "Enter mobile number"})
        }
        let mob =  /^[789][0-9]{9}$/;
        if (mob.test(data.mobile) == false) { 
            return res.status(400).send({status:false, msg:"please provied valid mobile number"})
        }
        let email =  /^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/;
        if (email.test(data.email) == false) { 
            return res.status(400).send({status:false, msg:"please provied valid email"})
        }
        const collage = await collegenModel.findOne({fullName: data.collegeName})
        if (!collage){
            return res.status(404).send({status: false, msg: "Enter valid college name"})
        }
        data.collegeId = collage._id
        const intern = await internModel.create(data)
        return res.status(201).send({status: true, data: intern})
    }catch(e){
        return res.status(500).send({status: false, msg: e.message})
    }
}


module.exports.createIntern = createIntern
