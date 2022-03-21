const mongoose = require("mongoose")

const internSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ]
    },
    mobile: {
        type: String,
        required: true,
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model("Intern", internSchema)