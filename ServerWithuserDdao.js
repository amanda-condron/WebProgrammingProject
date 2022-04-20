const express = require('express'); 
const morgan = require('morgan'); 
const dao = require('./model/usersDogsDaoMem');

let port = 4000;
let hostname = 'localhost';

const app = express(); 
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));

//GET ALL DOGS
app.get('/usersDogs',function(req,res){ 
    res.status(200);
    res.send(dao.readAll());
    res.end(); 
});

//GET ONE DOG
app.get('/usersDogs/:id',function(req,res){
    let id = parseInt( req.params.id );
    let found = dao.read(id);

    if(found !== null)
    { 
        res.status(200);
        res.send(found);
    }
    else
    {
        res.status(404);
        res.send({msg:'Dog not found.'}); 
    }
    res.end(); 
});

app.post('/usersDogs',function(req,res){
    let newDog = {};
    newDog.name = req.body.breed_name;
    newDog.weight = req.body.dog_weight;
    newDog.dog_LifeExp = req.body.dog_LifeExp;
    newDog.description = req.body.dog_description;

    if(req.body.txt_id)
    {
        console.log('Update Dog');
        newDog.txt_id = req.body.txt_id;
        dao.update(newDog);
    }
    else
    {
        dao.create(newDog);        
    }
    res.redirect('index.html');
});

app.get('/delusersDogs/:id',function(req,res){
    //URL parameter always on req.params.<name>
    let id = parseInt( req.params.id );   
    
    dao.del(id);

    res.redirect('../index.html');
}); //end of app.get(deluser)

/*app.post('/updateusersDogs',function(req,res){
    //Not being called, the front-end sends to the same function as the create new user

}); */



app.listen(port,hostname,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${hostname}:${port}...`);
});