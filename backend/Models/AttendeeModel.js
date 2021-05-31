const mongoose = require('mongoose');

const AttendeeSchema =  new mongoose.Schema({

name:{
    type: String,
    required:true
},
nic:{
  type:String
},
address:{

    type:String,
    required:true
},
email:{
    type: String,
    required: true,
    match: /.com$/,
    lowercase: true,
    unique:true
},
payStatus:{
    type:Boolean,
    default:false
},
password:{
type:String,
}
});

const Attendee = mongoose.model('Atendee',AttendeeSchema);




