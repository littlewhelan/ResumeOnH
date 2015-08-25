var express = require('express');
var router = express.Router();
var path =require('path');

router.get("/", function(req,res) {
    console.log("Here is a console log");
    res.sendFile(path.join(__dirname, '../public/view/index.html'));
    //next();
});


module.exports = router;