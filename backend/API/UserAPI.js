
const User = require('../Models/UserModel')
const bcrypt = require('bcrypt')

const Adduser = async (req,res)=>{
    let userOb = req.body;
    const salt = await bcrypt.genSalt(10);
    const pHash =await bcrypt.hash(userOb.password,salt);
    userOb.password = pHash
    const userObj= new User(userOb)
    try {
        const result = await userObj.save()
           // console.log(result);
            res.send(result);
        
       
    }catch (e) {
        console.log(e.message);
        res.status(401).send(e.error)
    }
}


const getAllUsers = async(req,res)=>{
    try {
        const result = await User.find()
        res.send(result) ;
    }catch (e){
        console.log(e.message);
        res.status(400).send(e.message);
    }
}


const UpdateUser =async (req,res)=>{
    console.log('update called');
    const id = req.user._id;
    const { description, awards, linkedIn} = req.body;

    const details = new User({
        description, awards, linkedIn
    });

    await User.update(
    {_id:id},
    {$set:{description:description, awards:awards, linkedIn:linkedIn}},
        {upsert:true}
    ).then(() => {
            res.send({ status: "Details are updated" });
        })
        .catch((err) => {
            console.log(err);
        });
}



const attendeePayment =async (req,res)=>{
  //  console.log('update called');

    const id = req.params.id;

    const {payment} = req.body;

    const details = new User({
        payment
    });



    await User.update(
        {_id:id},
        {$set:{payment:payment}},
        {upsert:true}
    ).then(() => {
        res.send({ status: "Details are updated" });
    })
        .catch((err) => {
            console.log(err);
        });
}


const deleteUser =async (req,res)=>{
    const id = req.user._id;
    try {
        const result = await User.findByIdAndDelete({_id:id})
       res.send(result);
    }catch (e){
        console.log(e.message);
    }
}



async  function loggingUser(logObj){
    try {
        const loggedObj = await User.findOne({email: logObj.email});
        if (!loggedObj) {
            return false;
        } else {
            const result = await bcrypt.compare(logObj.password, loggedObj.password);
            if (!result) return false;
            else {
                return loggedObj;
            }
        }
    }catch (e) {
        console.log(e.message);
    }
}





const getUserDetails = async(req,res)=>{
    try {
        const user = req.user
        const UserOb = await User.findById({_id: user._id})
            .select({name: 1, email: 1, mobile: 1, linkedIn: 1, description: 1, awards: 1,category:1,profilePic:1})
        res.send(UserOb);
    }catch (e) {
        console.log(e.message);
    }
}


module.exports = {Adduser,getAllUsers,UpdateUser,deleteUser,getUserDetails,loggingUser,attendeePayment}