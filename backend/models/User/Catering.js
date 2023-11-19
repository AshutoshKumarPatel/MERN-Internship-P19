const mongoose = require("mongoose");
const individualSchema = require("./Individual")

const cateringSchema = new mongoose.Schema({
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
    cusine: {
        type: String,
        enum: ['Italian', 'Chinese', 'NorthIndian', 'Mugulai', 'SouthIndian', 'Continental'],
        required: true,
        default: "",
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Catering", cateringSchema);