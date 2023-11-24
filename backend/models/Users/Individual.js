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

const Individual = mongoose.model("Individual", individualSchema);
module.exports = { Individual, individualSchema : individualSchema };