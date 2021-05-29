const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homePageModel = new Schema({
  homePageTitle: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  backGroudImg: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  homePageDescription: {
    type: String,
    required: true,
  },
});

const homePageDetails = mongoose.model("homePage", homePageModel);
module.exports = homePageDetails;
