const mongoose = require("mongoose");

// note that this schema might vary please add Workshop and Research Schemas to this
//ill create the Backend API after adding Research and Workshop details
//Please commit after adding model
const userSchema = new mongoose.Schema({
  name: {
    //1
    type: String,
    required: true,
  },
  email: {
    //2
    type: String,
    required: true,
    match: /.com$/,
    lowercase: true,
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
  },
  linkedIn: {
    //5
    type: String,
  },
  category: {
    //6
    type: String,
    enum: ["Workshop Conductor", "Researcher"],
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  description: {
    //7
    type: String,
    required: true,
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
    //10
    {
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
    },
  ], //add Workshop related things
  research: [
    {
      researchTitle: {
        type: String,
        required: true,
      },
      researchField: {
        type: String,
        required: true,
      },
      researchYear: {
        type: Date,
        required: true,
      },
      coAuthors: {
        type: String,
        required: true,
      },
      isAccepted: {
        type: Boolean,
        required: true,
      },
    },
  ], //add Research related things
});

const User = mongoose.model("User", userSchema);

module.exports = User;
