
const express = require('express');
const mysql = require('mysql2');
const app = express();

var db = mysql.createConnection(
    {
    user: 'root',
    password: '' ,
    host:'localhost',
    database: 'athena',
    port: 3308
  }); 

  db.connect ((error)=>{
      if(error){
          console.log(error);
      }
      else{
          console.log("Connected To DB");
      }
  })

  module.exports = db;