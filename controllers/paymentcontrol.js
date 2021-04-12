const express = require('express');
const app = express();
var db = require('../models/dbconnect');
const path = require("path");
var dash = require('../src/server');



// var express = require("express");
// var app = express();
// var Razorpay=require("razorpay");
// var bodyParser = require('body-parser')

// let instance = new Razorpay({
//   key_id: 'rzp_live_hZsS1yrvjcOutC', // your `KEY_ID`
//   key_secret: 'lTIytBE9IhuOGWUIsyM5e3dW' // your `KEY_SECRET`
// })


// app.use('/web', express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));


// app.post("/api/payment/order",(req,res)=>{
// params=req.body;
// instance.orders.create(params).then((data) => {
//        res.send({"sub":data,"status":"success"});
// }).catch((error) => {
//        res.send({"sub":error,"status":"failed"});
// })
// });

// app.get("/", (req, res)=>{
//        res.sendFile(__dirname +'\\payment.html');
// })


// app.post("/api/payment/verify",(req,res)=>{
// body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
// var crypto = require("crypto");
// var expectedSignature = crypto.createHmac('sha256', 'lTIytBE9IhuOGWUIsyM5e3dW')
//                                 .update(body.toString())
//                                 .digest('hex');
//                                 console.log("sig"+req.body.razorpay_signature);
//                                 console.log("sig"+expectedSignature);
// var response = {"status":"failure"}
// if(expectedSignature === req.body.razorpay_signature)
//  response={"status":"success"}
//     res.send(response);
// });


module.exports.amountgenerator = (req,res) =>{
    console.log(req.session.regdetails);
    console.log(req.session.regdetails.event1)
    db.query("SELECT * FROM events ", async(error, results)=>{
    if(results.length===0){
        console.log(results);
        return res.send("Email Or Password Incorrect");
    }
     else{
        event1 = "";
        event2 = "";
        event3 = "";
        event1 = req.session.regdetails.event1;
        event2 = req.session.regdetails.event2;
        event3 = req.session.regdetails.event3;
        registrationamount =0;
        console.log(registrationamount);  
        console.log(results);
        results.forEach(event => {
            console.log("hey");
            console.log(event.name);
            if(event.name == event1){
                registrationamount += event.eventamount;
            }
            if(event.name == event2){
                registrationamount += event.eventamount;
            }
            if(event.name == event3){
                registrationamount += event.eventamount;
            }
            
        });      
        console.log(registrationamount); 
        res.render('payment', {registrationamount:registrationamount});  
     }
    if(error){
        console.log(error)
    }
})
}