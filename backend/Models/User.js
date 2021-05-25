const mongoose = require("mongoose");

// note that this schema might vary please add Workshop and Research Schemas to this
//ill create the Backend API after adding Research and Workshop details
//Please commit after adding model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    pattern: /.com$/,
    lowercase: true,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  linkedIn: {
    type: String,
  },
  category: {
    enum: ["Attendee", "Workshop Conductor", "Researcher"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  awards: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  isPayed: {
    type: Boolean,
  },
  workshop: [
    {
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
