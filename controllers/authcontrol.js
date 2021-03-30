
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
var db = require('../models/dbconnect');
const path = require("path");
var dash = require('../src/server');





module.exports.register = (req,res) =>{
  
    const {name,email,password,cnfrmpassword} = req.body;
    db.query("SELECT email FROM users where email = ?", [email], async (error,results) =>{
    if(error){
        console.log(error);
    }
    if (results.length >0){
        return res.send ("email exist");
    }
    else if (password !== cnfrmpassword){
        return res.send ("password not same");
    }

    let hashedPass = await bcrypt.hash(password,8);
    db.query("INSERT INTO users SET ?", {name : name, email : email, password: hashedPass},(error,reusult)=>{
        if(error){
            console.log(error)
        }
        else {
            res.send('User registered');
        }

    });

    })}

    module.exports.login = (req,res) =>{
 
        
    try{
        const {email, password} = req.body;
        req.session.email = email;
        
        if(!email || !password){
            return res.send("No fields can be empty");
        }
        db.query("SELECT * FROM users where email = ?", [email], async(error, results)=>{
            if(results.length===0){
                return res.send("Email Or Password Incorrect");
            }
            // else{
            //     username = results[0].name;
            // }
            if(error){
                console.log(error);
            }
            if( !results || !(await (bcrypt.compare(password, results[0].password))) ){

                return res.send("Email Or Password Incorrect");
            }
            else{
                
                req.session.name= results[0].name;
                res.redirect('/userdashboard');
                
            }
        })
        
    }
    catch(error){
        console.log(error);

    }
    


    }