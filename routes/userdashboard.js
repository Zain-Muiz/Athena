const express = require ('express');
const app = express();
const router = express.Router();

router.get('/', (req,res)=>{
    if(req.session.email){
        console.log('hellooo');
        res.send('logged in Dashh');
    }
    else {
        res.send("please log in")
    }
})

module.exports = router;