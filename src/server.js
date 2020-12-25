const { json } = require('body-parser');
const express = require ('express');
const app = express();
var session = require('express-session');
const host = 'localhost' ;
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({
    secret:"aaa",
    resave: false,
    saveUninitialized: false    
}))
  
// routes
  //pages route
const pagesRoute = require('../routes/pages')
app.use('/', pagesRoute);
  //auth route
const authRoute = require('../routes/auth')
app.use('/auth', authRoute);




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});