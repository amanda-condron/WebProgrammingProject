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
    { _id:8,name:'Italian Greyhound', weight:'7.9 - 11 lbs', lifeExp:'12 - 15 years', description:'The Italian Greyhound dog breed was a favorite companion of noblewomen in the Middle Ages, especially in Italy. But this small hound was more than a lapdog, having the speed, endurance, and determination to hunt small game. These days, they’re a family dog whose beauty and athleticism is admired in the show ring and in obedience, agility, and rally competitions.'},
    { _id:9,name:'Brussels Griffon', weight:'5 - 15 lbs', lifeExp:'12 - 15 years', description:'They come in four colors — red, black-and-reddish brown, black and tan, and black, and they can have either a smooth or rough coat. They are stocky, confident and easy to train, but like Chihuahuas, they are fragile when it comes to rough play.'},
    { _id:10,name:'Affenpinscher', weight:'7 - 10 lbs', lifeExp:'12 - 15 years', description:'Affens originated in Germany and were bred to be "ratters," killers of rats, mice and other vermin. Today, they are a wonderful addition to any family who loves to laugh, as the affenpinscher is consistently entertaining, mischievous and playful. Affens love to climb and bark, too, so be sure they get proper training.'},
    { _id:11,name:'Russian Toy', weight:'3 - 6.5 lbs', lifeExp:'12 - 14 years', description:'When a Russian toy wants to frolic, you may be hard-pressed to keep up, but as much as they love to run, they love downtime, too, spending time lounging in your lap. Russian toys crave human companionship.'},
    { _id:12,name:'Toy Fox Terrier', weight:'3.5 - 7 lbs', lifeExp:'13 - 15 years', description:'The whip-smart, fun-loving toy fox terrier is eager to please and learn at every turn. They, too, have a work history as farm ratters and hunters of small game. That lineage and boundless energy make them prone to chasing small animals today, and they do need plenty of human supervision.'},
    { _id:13,name:'Japanese Chin', weight:'7 - 11 lbs', lifeExp:'10 - 12 years', description:'The Japanese chin has a short muzzle and big, round eyes that are hard to resist. A charming companion, the dog is an extreme cuddler who is exotic, graceful and relatively quiet, which is why some folks call it the "feline" of dogs.'},
    { _id:14,name:'Chinese Crested', weight:'8 - 12 lbs', lifeExp:'13 - 18 years', description:'Lively, alert and loving, the Chinese crested can be hairless or coated, and comes in a variety of colors. If you choose a hairless crested, shedding and doggy odor will not be much of a problem, but they are less likely to tolerate cold, so keep them covered.'},
    { _id:15,name:'Minature Pinscher', weight:'8 - 10 lbs', lifeExp:'12 - 16 years', description:'This “King of the Toys" is energetic and smart, and is best suited to an owner who can reign in their willful personality. On the plus side, the mini pin is fun-loving and endlessly entertaining, and has a short coat that is easy to groom.'},
    { _id:16,name:'Cavalier King Charles Spaniel', weight:'13 - 18 lbs', lifeExp:'12 - 15 years', description:'The pampered Cavalier King Charles spaniel is refined and graceful with a royal lineage, but also a down-to-earth companion for any member of the family.'},
    { _id:17,name:'Boston Terrier', weight:'12 - 24 lbs', lifeExp:'11 - 13 years', description:'Bostons are smart, but as their fighter instinct is still very much a part of who they are, they can be extremely stubborn, so make sure yours has the proper training. Once they do, the spunky, loving and affectionate Boston thrives in every setting or situation.'},
    { _id:18,name:'Havanese', weight:'7 - 13 lbs', lifeExp:'14 - 16 years', description:'Havanese pups are "on" all the time, meaning if they have an audience they are more than willing to entertain. The breed makes a welcome addition to any family, but make sure to keep your Havanese groomed — their lux coats require daily brushing.'},
    { _id:19,name:'Norwich Terrier', weight:'12 lbs', lifeExp:'12 - 15 years', description:'This fearless, sturdy breed has boundless energy for play but is also just as content being a lapdog. Remember to keep Norwich terriers safely leashed or within your yard, as these dogs have a high drive for small prey.'},
    { _id:20,name:'Pekingese', weight:'10 - 14 lbs', lifeExp:'12 - 14 years', description:'This fluffy bundle was once the dog of Chinese royalty and still carries some personality traits of that former life. They can be affectionate or independent and will do whatever suits them at the moment.'},
    { _id:21,name:'Schipperke', weight:'10 - 16 lbs', lifeExp:'12 - 14 years', description:'The Schipperke is often called "the little black devil" because the breed can be quite mischievous. They’re sturdy, stubborn and smart, which may not be the best traits for every household, as they may end up running it.'},
    { _id:22,name:'Toy American Eskimo', weight:'6 - 10 lbs', lifeExp:'13 - 15 years', description:'This breed’s soft plumes of white hair have garnered the nickname "The Dog Beautiful." But this dog is not just all looks — they are smart, energetic and have an endless curiosity, which means they’re up for just about any great adventure.'},
    { _id:23,name:'German Spitz', weight:'20 - 24 lbs', lifeExp:'13 - 15 years', description:'This foot-tall ball of fluff looks like a larger Pomeranian, but that is where the similarity ends. The spitz is also a working dog who was bred to hunt small prey.'},
    { _id:24,name:'Lowchen', weight:'15 lbs', lifeExp:'13 - 15 years', description:'The Lowchen or “little lion dog” hails from France and Germany and was bred as a royal footwarmer with a distinctive haircut that leaves them fluffy at the front and naked in back. This rare breed has been around since at least the 16th century.'},
    { _id:25,name:'Papillon', weight:'5 - 10 lbs', lifeExp:'14 - 16 years', description:'The Pap looks like a dainty lap dog with a plumed tail but is nonetheless robust and eager to play. The breed does well in agility competitions and thrives in any climate or home setting.'},

];

app.get('/smallDog',function(req,res){ // REST get (all) method
    res.status(200); // 200 = Ok
    res.send(smallDogs); //send the users back to the client
    res.end(); 
});

//gets one dog based on id
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


const usersDogs = [];

app.get('/usersDogs', function(req,res){
    res.status(200);
    res.send(usersDogs);
    res.end();
});


//GETTING INPUT FROM THE FORM
app.post('/usersDogs', function(req, res){
    let newDog = {};
    newDog.name = req.body.breed_name;
    newDog.weight = req.body.dog_weight;
    newDog.lifeExp = req.body.dog_LifeExp;
    newDog.description = req.body.dog_description;
    if(req.body.txt_id){
        console.log('Update user');
    }
    else {
        if(usersDogs.length > 0) newDog._id = (usersDogs[usersDogs.length-1]._id)+1;
        else newDog._id = 1;

        usersDogs.push(newDog);
    }
    res.redirect('index.html');

});

//UPDATE THE NEWDOG
/*app.post('/usersDogs', function(req, res){
    let newDog = {};
    newDog.name = req.body.BreedName;
    newDog.weight = req.body.dogWeight;
    newDog.lifeExp = req.body.dogLifeExpectancy;
    newDog.description = req.body.description;
    newDog._id = req.body._id;
    for(let i = 0; i < usersDogs.length; i++)
    {
        if(usersDogs[i]._id === newDog._id)
        {
            newDog[i] = newDog;
            break;
        }
    }
    res.redirect('index.html');
}) */





app.listen(port,hostname,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${hostname}:${port}...`);
});


// description sites:
/*
    https://en.wikipedia.org/wiki/Pug#:~:text=The%20pug%20is%20a%20breed,body%20with%20well%2Ddeveloped%20muscles.
    https://dogtime.com/dog-breeds/
    https://www.familyminded.com/s/best-small-dog-breeds-ce3add13d4ed4ff0
    
*/