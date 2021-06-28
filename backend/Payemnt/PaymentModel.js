const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    idNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    cardNumber:{
        type:String,
        required:true
    },
    cvs:{
      type:String,
      required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
      type:Date,
      default:Date.now
    }
})

const PaymentModel = mongoose.model('payments',PaymentSchema)


module.exports =PaymentModel;