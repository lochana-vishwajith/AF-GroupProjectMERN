
const User = require('../Models/UserModel')
const bcrypt = require('bcrypt')

async function Adduser(user){
const salt = await bcrypt.genSalt(10);
const pHash =await bcrypt.hash(user.password,salt);


    const userObj= new User({
        name: user.name,
        email: user.email,
        password: pHash,
        mobile: user.mobile,
        linkedIn: user.linkedIn,
        category: user.category,
        description: user.description,
        awards: user.awards,
        profilePic: user.profilePic,
    })
    try {
        const result = await userObj.save()
        return result;
    }catch (e) {
        console.log(e.message);
    }
}


async function getAllUsers(){
    try {
        const result = await User.find()
        return result;
    }catch (e){
        console.log(e.message);
    }
}


async function UpdateUser(id,reqObj){
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


async function deleteUser(id){
    try {
        const result = await User.findByIdAndDelete({_id:id})
        return result;
    }catch (e){
        console.log(e.message);
    }
}

async  function loggingUser(logObj){
try {
    const loggedObj = User.findOne({email: logObj.email});
    if (!loggedObj) {
        return false;
    } else {
        const result = bcrypt.compare(logObj.password, loggedObj.password);
        if (!result) return false;
        else {
            return loggedObj;
        }
    }
}catch (e) {
    console.log(e.message);
}
}

async function getUserDetails(user){
    const UserOb =await User.findById({_id:user._id})
        .select({name:1,email:1,mobile:1,linkedIn:1,description:1,awards:1})
    return UserOb;
}


async function addResearches(userID,researchObj){
    try{
    const userOb = await  User.findById({_id:userID})
    userOb.research.push(researchObj);
    const resOb = userOb.save();
    return resOb;
}catch(e){
    console.log(e.message);
}

}


async function addWorkshop(userID,WorkshopObj){
    try{
    const userOb = await  User.findById({_id:userID})
    userOb.workshop.push(WorkshopObj);
    const resOb = userOb.save();
    return resOb;
    }catch(e){
        e.message
    }
}


module.exports = {Adduser,getAllUsers,UpdateUser,deleteUser,loggingUser,getUserDetails,addResearches,addWorkshop}