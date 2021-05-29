const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopTemplateSchema = new Schema({
  templateTitle: {
    type: String,
    required: true,
  },
  templateFile: {
    type: String,
    required: true,
  },
  specialNotes: {
    type: String,
    required: true,
  },
});

const researchPaper = mongoose.model(
  "WorkshopTemplate",
  workshopTemplateSchema
);
module.exports = researchPaper;
