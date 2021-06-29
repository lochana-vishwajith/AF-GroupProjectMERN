const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presentContent = new Schema({
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "homePage",
    required: true,
  },
});

const content = mongoose.model("HomePageContent", presentContent);
module.exports = content;
