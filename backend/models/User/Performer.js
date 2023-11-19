const mongoose = require("mongoose");
const individualSchema = require("./Individual")

const performerSchema = new mongoose.Schema({
    ...individualSchema.obj,
    charges: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
        default: false,
    },
    websiteUrl: {
        type: String,
        required: false,
        default: "",
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    expreience: {
        type: Number,
        required: true,
        default: 0,
    },
    performerType: {
        type: String,
        enum: ['singer', 'dancer', 'magician', 'comedy'],
        required: true,
        default: "",
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Performer", performerSchema);