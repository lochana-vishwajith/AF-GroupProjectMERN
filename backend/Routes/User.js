//User.js Route
//hasitha
const express = require('express')
const router = express.Router();
const User = require('../Models/User');

router.post('/addUsers',async(req,res)=>{
    let user = req.body;
    const result = await User.Adduser(user)
    res.send(result);
})

router.get('/getUsers',async(req,res)=>{
    const userList = await User.getAllUsers()
    res.send(userList);
});

router.put('/updateUser/:id',async(req,res)=>{
    let id = req.params.id;
    let obj = req.body;
    const result = await User.UpdateUser(id,obj)
    res.send(`The User is Updated Successfully  ${result}`);
})

router.delete('/deleteUser/:id',async(req,res)=>{
    let id = req.params.id;
    const result = await User.deleteUser(id);
    res.send(`User Has deleted Successfully ${result}`)
})

module.exports = router;