const upload = require('../Middleware/imgupload');
const Router = require('express').Router();

Router.post("/single",upload.single("image"),(req, res) => {
    console.log(req.file.path);
    res.send("file upload success");
});

module.exports = Router;

