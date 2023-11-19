const mongoose = require("mongoose");

const individualSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    contactNo: {
        type: Number,
        required: true,
    },
    profilePicPath: {
        type: String,
        required: false,
        default: "",
    },
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Individual", individualSchema);