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
    { _id:1,name:'Chihuahua', weight:'3.3 - 6.6 lbs', lifeExp:'12 - 20 years', description: 'The Chihuahua dog breed‘s charms include their small size, big personality, and variety in coat types and colors. They’re all dog, fully capable of competing in dog sports such as agility and obedience, and are among the top ten watchdogs recommended by experts.'},
    { _id:2,name:'Yorkshire Terrier', weight:'4 - 6 lbs', lifeExp:'13 - 16 years', description:'Small in size but big in personality, the Yorkshire Terrier makes a feisty but loving companion. The most popular toy dog breed in the United States, the “Yorkie” has won many fans with their devotion to their owners, their elegant looks, and their suitability to apartment living.'},
    { _id:3,name:'Pomeranian', weight:'4.2 - 7.7 lbs', lifeExp:'12 - 16 years', description: 'Descended from large sled dog breeds, the now-tiny Pomeranian has a long and interesting history. The foxy-faced dog, nicknamed “the little dog who thinks he can,” is compact, active, and capable of competing in agility and obedience or simply being a family friend.'},
    { _id:4,name:'Shih Tzu', weight:'8.8 - 16 lbs', lifeExp:'10 - 16 years', description:'The name “Shih Tzu” means little lion, but there is nothing fierce about this dog breed. This pooch is a lover, not a hunter. Bred solely to be companions, Shih Tzus are affectionate, happy, outgoing house dogs who love nothing more than to follow their people from room to room.'},
    { _id:5,name:'Pug', weight:'14 - 18 lbs', lifeExp:'12 - 15 years', description: 'The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail. The breed has a fine, glossy coat that comes in a variety of colors, most often light brown (fawn) or black, and a compact, square body with well-developed muscles.'},
    { _id:6,name:'Dachshund', weight:'16 - 24 lbs', lifeExp:'12 - 16 years', description:'Dachshunds are scent hound dogs bred to hunt badgers and other tunneling animals, rabbits, and foxes. Hunters even used packs of Dachshunds to trail wild boar. Today their versatility makes them excellent family companions, show dogs, and small-game hunters.'},
    { _id:7,name:'French Bulldog', weight:'16 - 24 lbs', lifeExp:'10 - 12 years', description:'The French Bulldog has enjoyed a long history as a companion dog. Created in England to be a miniature Bulldog, they accompanied English lacemakers to France, where they acquired their “Frenchie” moniker.'},
    { _id:8,name:'Italian Greyhound', weight:'7.9 - 11 lbs', lifeExp:'12 - 15 years', description:'The Italian Greyhound dog breed was a favorite companion of noblewomen in the Middle Ages, especially in Italy. But this small hound was more than a lapdog, having the speed, endurance, and determination to hunt small game. These days, they’re a family dog whose beauty and athleticism is admired in the show ring and in obedience, agility, and rally competitions.'}
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





app.listen(port,hostname,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${hostname}:${port}...`);
});


// description sites:
/*
    https://en.wikipedia.org/wiki/Pug#:~:text=The%20pug%20is%20a%20breed,body%20with%20well%2Ddeveloped%20muscles.
    https://dogtime.com/dog-breeds/

*/