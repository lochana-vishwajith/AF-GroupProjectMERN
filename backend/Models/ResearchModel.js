//Savith IT18014396
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const researchDetailsSchema = new Schema({
  researchTitle: {
    type: String,
  },
  researchField: {
    type: String,
  },
  researchYear: {
    type: Date,
    default: Date.now,
  },
  coAuthors: {
    type: String,

  },
  isAccepted: {
    type: Boolean,
  },
  fileName: {
    type: String,
  },
});

const researchDetails = mongoose.model(
  "researchDetails",
  researchDetailsSchema
);

module.exports = {researchDetails,researchDetailsSchema};
