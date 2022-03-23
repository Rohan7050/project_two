const mongoose = require("mongoose")

const collegeSchema = mongoose.Schema({
    name : {
        type: String,
        lowercase: true,
        unique: true,
        required: "please enter name",
        trim: true
    },
    fullName: {
        type: String,
        required: "please enter fullName",
        trim: true
    },
    logoLink:{
        type: String,
        required: "please enter logolink",
        trim: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("College", collegeSchema)