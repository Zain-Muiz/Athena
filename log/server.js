// Chunk1
const express = require('express');
const sentmail = require('./mail');

const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;

log(Math.floor((Math.random()*10000)+1));

// Chunk2
// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email',(req,res) => {
    // TODO
    // Sent mail
    sentmail(req.body.email,req.body.text)
    log('Data: ',req.body);
    res.json({ message: 'Message Recieved!!!'})
});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.listen(PORT, () => log('Server is started',8080));