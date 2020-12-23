const express = require('express');
const app = express();
const router = express.Router();
const authcntrl = require('../controllers/index.js');


router.post('/login', authcntrl.login );

module.exports = router;