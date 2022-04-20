//const dao = require('../model/usersDogsDaoMem');
const dao = require('../model/usersDogsDAOMongo');

//GET ALL DOGS
exports.getAll = async function(req,res){
    res.status(200);
    res.send(await dao.readAll());
    res.end();
}

//GET ONE DOG
exports.get = function(req,res){
    let id = req.params.id;
    let found = dao.read(id);

    if(found !== null)
    {
        res.status(200);
        res.send(found);
    }
    else
    {
        res.status(404);
        res.send({msg: 'Dog not found'});
    }
    res.end();
}

//CREATE A NEW DOG OR UPDATE EXISTING DOG
exports.postCreateOrUpdate = function(req,res){
    let newDog = {};
    newDog.name = req.body.breed_name;
    newDog.weight = req.body.dog_weight;
    newDog.lifeExp = req.body.dog_LifeExp;
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
}

//DELETE A DOG
exports.deleteOne = function(req,res){
    let id = parseInt(req.params.id);
    dao.del(id);
    res.redirect('../index.html');
}
