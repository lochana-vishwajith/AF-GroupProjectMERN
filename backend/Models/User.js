const mongoose =require('mongoose');

// note that this schema might vary please add Workshop and Research Schemas to this
//ill create the Backend API after adding Research and Workshop details
//Please commit after adding model
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        pattern:/.com$/,
        lowercase:true
    },
    password:{
        type:String,
        min:8,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    linkedIn:{
        type:String},
    category:{
        enum:['Attendee','Workshop Conductor','Researcher'],
        required:true
    },
    description:{
        type:String,
        required:true
    },
    awards:{
        type:String
    },
    profilePic:{
        type:String
    },
    isPayed:{
        type:Boolean,
    },
    workshop:[],//add Workshop related things
    research:[]//add Research related things

})