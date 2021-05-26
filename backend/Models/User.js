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
    enum: ["Workshop Conductor", "Researcher"],
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

  workshop: [
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

const User = mongoose.model('User',userSchema)

async function Adduser(user){

  const userObj= new User({
    name: user.name,
    email: user.email,
    password: user.password,
    mobile: user.mobile,
    linkedIn: user.linkedIn,
    category: user.category,
    description: user.description,
    awards: user.awards,
    profilePic: user.profilePic
  })

  


}




