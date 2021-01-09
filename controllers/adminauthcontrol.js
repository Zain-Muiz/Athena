
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
var db = require('../models/dbconnect');
var path = require('path');
app.use(express.static('public'));


    module.exports.login = (req,res) =>{
 
        
    try{
        const {email, password} = req.body;
        req.session.email = email;
        
        if(!email || !password){
            
            return res.send("No fields can be empty");
        }
        db.query("SELECT * FROM admin where email = ?", [email], async(error, results)=>{
            if(results.length===0){
                return res.send("Email Or Password Incorrect");
            }
            else{
                username = results[0].name;
                admintype = results[0].category;             
            }
            if(error){
                console.log(error)
            }
            if( !results || !(await (bcrypt.compare(password, results[0].password))) ){

                return res.send("Email Or Password Incorrect")
            }
            else{
                
                req.session.name= username;
                req.session.admintype =  admintype;
                res.redirect('/admindashboard');
                
            }
        })
        
    }
    catch(error){
        console.log(error);

    }}

    module.exports.organizer = (req,res) =>{
 
    if(req.session.email){
            console.log('hellooo');
            res.render('orgdashmain');
        try{
           console.log('try keri');
            
        }
        catch(error){
            console.log(error);
    
        }
      }
    else {
        res.send("please log in");
    }}
