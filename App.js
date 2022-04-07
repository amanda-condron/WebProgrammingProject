const usersDogCont = require('./controller/usersDogsController');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));

app.get('/usersDogs', usersDogCont.getAll);
app.get('/usersDogs/:id', usersDogCont.get);
app.post('/usersDogs', usersDogCont.postCreateOrUpdate);
app.get('/delusersDogs/:id', usersDogCont.deleteOne);
app.post('/usersDogs', usersDogCont.postCreateOrUpdate);

exports.app = app;