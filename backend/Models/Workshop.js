const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
  wsID: {
    type: String,
    required: true,
  },

  wsName: {
    type: String,
    required: true,
  },

  wsDate: {
    type: String,
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
    required: true,
    default: false,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Workshop", workshopSchema);