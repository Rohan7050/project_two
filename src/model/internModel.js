const mongoose = require("mongoose")

const internSchema = mongoose.Schema({
    name: {
        type: String,
        required: "please enter name",
        trim: true
    },
    email: {
        type:String,
        required: "please enter email",
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
        required: "please enter mobile number",
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "please enter valid mobile number"
        ]
  
    },
    collegeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: "please enter collage ID"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model("Intern", internSchema)