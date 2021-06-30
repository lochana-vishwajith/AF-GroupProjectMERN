//UserModel.js Route
//hasitha


const express = require('express')
const router = express.Router();
const User = require('../API/UserAPI');
const auth = require('../Middleware/UserAuth')

//the id didnt pass through (get,put,delete)  request since Authorization middleware adds the user id (services which are not using the auth function are passing the id)

router.post('/addUsers',User.Adduser)


router.get('/myProfile',auth,User.getUserDetails);


router.get('/getUsers',User.getAllUsers);

router.put('/updateUser',auth,User.UpdateUser);


router.delete('/deleteUser',auth,User.deleteUser);

router.put('/attendeePayment/:id',User.attendeePayment);


router.post('/userLogin',async(req,res)=>{
    let  obj = req.body;
    const  resultObject = await User.loggingUser(obj);
    if(resultObject){
        const authenticateToken = await resultObject.authenticateUser();
        const userob ={
            token:authenticateToken,
            obj:resultObject
        }
        res.header('authorization',authenticateToken).send(userob);

    }
    else{
        res.status(404).send('UnSuccess')
    }
})
module.exports = router;