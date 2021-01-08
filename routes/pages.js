const express = require ('express');
const app = express();
const router = express.Router();
const dashRoute = require('./userdashboard');
const admindashRoute = require('./admindashboard');
var path = require('path');
var session = require('express-session');


router.get('/login', (req,res)=>{
    res.sendFile(path.resolve('views/login.html'));
})


router.use('/userdashboard',dashRoute);
router.use('/admindashboard',admindashRoute);

module.exports = router;