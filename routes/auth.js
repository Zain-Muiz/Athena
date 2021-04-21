const express = require('express');
const app = express();
const router = express.Router();  
const authcntrl = require('../controllers/authcontrol.js');


router.post('/verifyotp', authcntrl.verifyregisterotp );
router.post('/userregister', authcntrl.register );
router.post('/login', authcntrl.login );

module.exports = router;