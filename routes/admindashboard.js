const express = require ('express');
const app = express();
const router = express.Router();

const adminauthcntrl = require('../controllers/adminauthcontrol.js');

admintype = req.session.admintype;

if (admintype == "organizer"){
router.get('/', adminauthcntrl.organizer );
}
else if (admintype == "superadmin"){
router.get('/', adminauthcntrl.superadmin );  
}
else if (admintype == "volunteer"){
router.get('/', adminauthcntrl.volunteer);  
}
else if (admintype == "finhead"){
router.get('/', adminauthcntrl.fin);  
}
else{
    (req,res)=>{
        res.send("Unautherized Access");
        res.redirect("/admin/auth/login");
    }
}

module.exports = router;