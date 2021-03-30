const express = require ('express');
const app = express();
const router = express.Router();

router.get('/', (req,res)=>{
    if(req.session.name){
        console.log("hey", req.session.name);
        res.render('user', {name: req.session.name, user: "User"});
    }
    else {
        res.send("please log in")
    }
})
router.get('/registerevent', (req,res)=>{
    if(req.session.name){
        console.log("hey", req.session.name);
        res.render('eventreg');
    }
    else {
        res.send("please log in")
    }
})

//router.get('/', userauthcntrl.userroute);


module.exports = router;