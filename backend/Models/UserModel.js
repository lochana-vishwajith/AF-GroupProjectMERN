const mongoose = require("mongoose");
const ResearchSchema = require("./ResearchModel").researchDetailsSchema;
const WorkshopSchema = require("./Workshop").workshopSchema;
const JWT = require("jsonwebtoken");
// note that this schema might vary please add Workshop and Research Schemas to this

const userSchema = new mongoose.Schema({
  name: {
    //1
    type: String,
    required: true,
  },
  email: {
    //2
    type: String,
    //required: true,
    //match: /.com$/,
    //lowercase: true,
   // unique:true,
  },
  password: {
    //3
    type: String,
    required: true,
  },
  mobile: {
    //4
    type: Number,
    required: true,
    unique: true,
  },
  linkedIn: {
    //5
    type: String,
  },
  category: {
    //6
    type: String,
    enum: ["WorkshopConductor", "Researcher","Attendee"],
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  description: {
    //7
    type: String,
  },
  awards: {
    //8
    type: String,
  },
  profilePic: {
    //9
    type: String,
  },
 workshop: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: false,
      ref: "Workshop",

    }],//add Workshop related things
  research: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: false,
      ref: "researchDetails",
    },
  ], //add Research related things
  payment:{
    type:Boolean
  }

});

userSchema.methods.authenticateUser = function () {
  const jwtToken = JWT.sign(
    { _id: this._id, category: this.category },
    "WEBTOKEN"
  );
  return jwtToken;
};

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
