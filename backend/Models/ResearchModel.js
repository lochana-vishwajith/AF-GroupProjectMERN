//Savith IT18014396
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const researchDetailsSchema = new Schema({
  researchTitle: {
    type: String,
    required: true,
  },
  researchField: {
    type: String,
    required: true,
  },
  researchYear: {
    type: Date,
    required: true,
  },
  coAuthors: {
    type: String,
    required: true,
  },
  isAccepted: {
    type: Boolean,
    required: true,
  },
  fileURL: {
    type: String,
    required: false,
  },
  isPayed: {
    type: Boolean,
    required: false,
  },
});

const researchDetails = mongoose.model(
  "researchDetails",
  researchDetailsSchema
);

module.exports = { researchDetails, researchDetailsSchema };
