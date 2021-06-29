const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homePageModel = new Schema({
  confName: {
    type: String,
    required: true,
  },

  dateOfConf: {
    type: String,
    required: true,
  },
  venueOfConf: {
    type: String,
    required: true,
  },
  confDesc: {
    type: String,
    required: true,
  },
  trackOne: {
    type: String,
  },
  trackTwo: {
    type: String,
  },
  trackThree: {
    type: String,
  },
  trackFour: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const homePageDetails = mongoose.model("homePage", homePageModel);
module.exports = homePageDetails;
