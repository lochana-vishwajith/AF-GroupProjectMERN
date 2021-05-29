const JWT = require('jsonwebtoken');


async function userAuth(req,res,next){
    const encodedToken = await req.header('x-auth-user');
try {
    if (!encodedToken) return res.status(404).send('invalid Token');
    else {
        const decodedResult = await JWT.verify(encodedToken, "WEBTOKEN");
        if(!decodedResult) res.status(404).send('Invalid token');
        req.user = decodedResult;
        next();
    }
}catch (e) {
    console.log(e.message)
}
}

module.exports = userAuth;