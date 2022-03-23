const express = require('express'); //import express
const morgan = require('morgan'); //import morgan for logging

let port = 4000;
let hostname = 'localhost';

const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public_html'));// Static server use the folder 'public_html'

const smallDogs = [
    { _id:1,name:'Chihuahua', weight:'3.3 - 6.6 lbs', lifeExp:'12 - 20 years', description:1},
    { _id:2,name:'Yorkshire Terrier', weight:'4 - 6 lbs', lifeExp:'13 - 16 years', description:2},
    { _id:3,name:'Pomeranian', weight:'4.2 - 7.7 lbs', lifeExp:'12 - 16 years', description:2},
    { _id:4,name:'Shih Tzu', weight:'8.8 - 16 lbs', lifeExp:'10 - 16 years', description:2},
    { _id:5,name:'Pug', weight:'14 - 18 lbs', lifeExp:'12 - 15 years', description:2},
    { _id:6,name:'Dachshund', weight:'16 - 24 lbs', lifeExp:'12 - 16 years', description:2},
    { _id:7,name:'French Bulldog', weight:'16 - 24 lbs', lifeExp:'10 - 12 years', description:2},
    { _id:8,name:'Italian Greyhound', weight:'7.9 - 11 lbs', lifeExp:'12 - 15 years', description:2}

];

app.get('/smallDog',function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(smallDogs); //send the users back to the client
    res.end(); 
});

app.get('/smallDog/:id', function(res,req){
    let id = parseInt(req.params.id);
    let smallDog = null;
    for(let i = 0; i < smallDogs.length; i++){
        if(smallDogs[i]._id === id)
        {
            smallDog = smallDogs[i];
            break;
        }
    }
    if(smallDog != null)
    {
        res.status(200).send(smallDog);
    }
    else
    {
        res.status(404);
        res.send({msg: 'Dog does not exist'});
    }
    res.end();

});


const readSmallDogs = async function() {
    const response = await fetch('http://localhost:4000/smallDog');
    smallDogs = await response.json();
    let out = `<table class="table table-striped table-hover">
        <thead>
            <tr>
                <th> ID </th>
                <th> Name </th>
            </tr>
        </thead>`;
    for(let i = 0; i < smallDogs.length; i++)
    {
        out += `<tr> <td> ${smallDogs[i]._id} </td>
            <td> ${smallDogs[i].name} </td></tr>`;
    }                         
    out += `<table>`;                                                                
    //JSON.stringify(smallDogs);
    document.getElementById('SmallDogData').innerHTML = out;
}





app.listen(port,hostname,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${hostname}:${port}...`);
});