const express = require ('express');
const app = express();
const router = express.Router();

const adminauthcntrl = require('../controllers/adminauthcontrol.js');


router.get('/', adminauthcntrl.organizer );
   

module.exports = router;