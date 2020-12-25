const express = require ('express');
const app = express();
const router = express.Router();
const dashRoute = require('./userdashboard');
var path = require('path');
var session = require('express-session');


router.get('/', (req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
})


router.use('/userdashboard',dashRoute);

module.exports = router;