const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commiteeMemberDetailsSchema = new Schema({
  memberName: {
    type: String,
    required: true,
  },
  memberPosition: {
    type: String,
    required: true,
  },
  memberQualification: {
    type: String,
    required: true,
  },
  memberNotes: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const memberDetails = mongoose.model(
  "commiteeMembers",
  commiteeMemberDetailsSchema
);
module.exports = memberDetails;
