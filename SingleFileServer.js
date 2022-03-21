const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging

let port = 4000;
let hostname = 'localhost';

const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));// Static server use the folder 'public_html'

app.get('/Small',function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(users); //send the users back to the client
    res.end(); 
});