//UserModel.js Route
//hasitha
const express = require('express')
const router = express.Router();
const User = require('../API/UserAPI');
const auth = require('../Middleware/UserAuth')

router.post('/addUsers',async(req,res)=>{
    let user = req.body;
    const result = await User.Adduser(user);
if(result){
    const authenticateToken = await result.authenticateUser();
    res.header('x-auth-user',authenticateToken);
    res.send(result);
}else{
    res.status(404).send('UnSuccess');
}
})

router.get('/myProfile',auth,async(req,res)=>{
    const user = await req.user;
   const userDetails = await User.getUserDetails(user);
   res.send(userDetails);
})

router.get('/getUsers',async(req,res)=>{
    const userList = await User.getAllUsers()
    res.send(userList);
});

router.put('/updateUser/:id',auth,async(req,res)=>{
    let id = req.params.id;
    let obj = req.body;
    const result = await User.UpdateUser(id,obj)
    res.send(`The User is Updated Successfully  ${result}`);
})

router.delete('/deleteUser/:id',auth,async(req,res)=>{
    let id = req.params.id;
    const result = await User.deleteUser(id);
    res.send(`User Has deleted Successfully ${result}`)
})

router.post('/userLogin',async(req,res)=>{
    let  obj = req.body;
   const  resultObject = await User.loggingUser(obj);
   if(resultObject){
       const authenticateToken = await obj.authenticateUser();
        res.header('x-auth-user',authenticateToken).send('Successfully Logged in');
   }
   else{
       res.status(404).send('UnSuccess')
   }
})

module.exports = router;