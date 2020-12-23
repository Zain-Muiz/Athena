const { json } = require('body-parser');
const express = require ('express');
const app = express();
const host = 'localhost' ;
const port = 3000;
const users = []

app.use(express.json());
  
// routes
  //pages route
//const pagesRoute = require('../routes/pages')
//app.use('/', pagesRoute);
  //auth route
const authRoute = require('../routes/auth')
app.use('/auth', authRoute);




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});