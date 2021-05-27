
const User = require('../Models/User')

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
module.exports = {Adduser,getAllUsers,UpdateUser,deleteUser}