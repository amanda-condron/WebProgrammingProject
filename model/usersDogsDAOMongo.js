const mongoose = require('mongoose');

const usersDogSchema = new mongoose.Schema({
    name: String,
    weight: String,
    lifeExp: String,
    description: String
});

const usersDogsModel = mongoose.model('usersDogs', usersDogSchema);

exports.readAll = async function(){
    let usersDogs = await usersDogsModel.find();
    return usersDogs;
}

exports.read = async function(id){
    let usersDogs = await usersDogsModel.findById(id);
    return usersDogs;
}

exports.create = async function(newDog){
    const usersDogs = new usersDogsModel(newDog);
    await usersDogs.save();
    return usersDogs;
}

exports.del = async function(id){
    let usersDogs = await usersDogsModel.findByIdAndDelete(id);
    return usersDogs;
} 

/*exports.deleteAll = async function(){
    await usersDogsModel.deleteMany();
} */

exports.update = function(usersDog){
    let usersDogs = await usersDogsModel.updateOne(usersDog);
    return usersDogs;
}
