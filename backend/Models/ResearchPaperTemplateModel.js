const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const researchTemplateSchema = new Schema({
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
  "ResearchPaperTemplate",
  researchTemplateSchema
);
module.exports = researchPaper;
