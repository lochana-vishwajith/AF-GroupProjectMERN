const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presentationTemplateSchema = new Schema({
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

const presentation = mongoose.model(
  "PresentationTemplate",
  presentationTemplateSchema
);
module.exports = presentation;
