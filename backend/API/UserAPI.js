
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
            console.log(result);
            res.send(result);
        
       
    }catch (e) {
        console.log(e.message);
        res.status(401).send(e.error)
    }
}


const getAllUsers = async(req,res)=>{
    try {
        const result = await User.find()
        return result;
    }catch (e){
        console.log(e.message);
        res.status(400).send();
    }
}


const UpdateUser =async (req,res)=>{
   const id = req.params.id
    const reqObj =req.body
    try{
        const result = User.findByIdAndUpdate({id},{
            $set:{description:reqObj.description,
                awards:reqObj.awards
            }},{new:true}
        )
        return result;
    }catch (e) {
        console.log(e.message);
    }
}


const deleteUser =async (req,res)=>{
   const id = req.params.id
    try {
        const result = await User.findByIdAndDelete({_id:id})
        return result;
    }catch (e){
        console.log(e.message);
    }
}

/*const loggingUser = async(req,res)=>{
   const logObj =req.body
try {
    const loggedObj = User.findOne({email: logObj.email});
    if (!loggedObj) {
        res.send('invalid email');
    } else {
        const result = bcrypt.compare(logObj.password, loggedObj.password);
        if(result){
            const authenticateToken = await loggedObj.authenticateUser();
            res.header('x-auth-user',authenticateToken).send('Successfully Logged in');
        }
        else{
            res.send('Wrong password')
        }
    }
}catch (e) {
    console.log(e.message);
}
}*/


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
    const user =req.body
    const UserOb =await User.findById({_id:user._id})
        .select({name:1,email:1,mobile:1,linkedIn:1,description:1,awards:1})
    return UserOb;
}


module.exports = {Adduser,getAllUsers,UpdateUser,deleteUser,getUserDetails,loggingUser}