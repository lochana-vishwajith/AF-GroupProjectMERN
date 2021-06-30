const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
  wsName: {
    type: String,
    required: true,
  },

  wsDate: {
    type: Date,
    required: true,
  },

  wsDescription: {
    type: String,
    required: true,
  },

  wsPresentorName: {
    type: String,
    required: true,
  },

  wsPresentorDescription: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
    required: false,
    default: false,
  },
  comment: {
    required: false,
    type: String,
    default: null,
  },

  url: {
    required: false,
    type: String,
  
  },

});

const workshopModel = mongoose.model("Workshop", workshopSchema);

module.exports = { workshopModel, workshopSchema };
