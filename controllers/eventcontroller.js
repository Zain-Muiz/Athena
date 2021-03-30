const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
var db = require('../models/dbconnect');
const path = require("path");
var dash = require('../src/server');





module.exports.registerevent = (req,res) =>{
  
    const {name,email,eventName,contactNo,collegeName,studyBranch,studyYear} = req.body;

    db.query("INSERT INTO registration SET ?", {name : name, email : email, eventName: eventName, contactNo: contactNo, collegeName: collegeName,studyBranch: studyBranch,studyYear: studyYear },(error,reusult)=>{
        if(error){
            console.log(error)
        }
        else {
            res.send('User registered');
        }

    });

}