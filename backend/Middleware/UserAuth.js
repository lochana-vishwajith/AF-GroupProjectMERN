const JWT = require('jsonwebtoken');


async function userAuth(req,res,next){
    const encodedToken = await req.header('authorization');
try {
    if (!encodedToken){
        console.log("no token") ;
        return res.status(404).send('invalid Token');
    }
    else {
        const decodedResult = await JWT.verify(encodedToken, "WEBTOKEN");
        if(!decodedResult) {
            console.log("invalid token");
            res.status(404).send('Invalid token');}
        req.user = decodedResult;
        console.log('Ok')
        next();
    }
}catch (e) {
    console.log(e.message)
}
}

module.exports = userAuth;