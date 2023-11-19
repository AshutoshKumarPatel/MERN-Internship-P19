const mongoose = require("mongoose");
const { baseSchema, serviceSchema } = require("./BaseSchema");

const educationalSchema = new mongoose.Schema({
    ...baseSchema.obj,
    performer: serviceSchema,
    catering: serviceSchema,
    musician: serviceSchema,
    photographer: serviceSchema
});

module.exports = mongoose.model("Educational", educationalSchema);
