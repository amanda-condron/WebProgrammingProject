exports.usersDogs = [
    { _id:1,name:'German Spitz', weight:'20 - 24 lbs', lifeExp:'13 - 15 years', description:'This foot-tall ball of fluff looks like a larger Pomeranian, but that is where the similarity ends. The spitz is also a working dog who was bred to hunt small prey.'},
    { _id:2,name:'Lowchen', weight:'15 lbs', lifeExp:'13 - 15 years', description:'The Lowchen or “little lion dog” hails from France and Germany and was bred as a royal footwarmer with a distinctive haircut that leaves them fluffy at the front and naked in back. This rare breed has been around since at least the 16th century.'},
    { _id:3,name:'Papillon', weight:'5 - 10 lbs', lifeExp:'14 - 16 years', description:'The Pap looks like a dainty lap dog with a plumed tail but is nonetheless robust and eager to play. The breed does well in agility competitions and thrives in any climate or home setting.'},
];

exports.readAll = function(){
    return exports.usersDogs;
}

exports.read = function(id){
    let index = pos(id);
    if(index >= 0)
        return exports.usersDogs[index];
    else
        return null;
}

exports.create = function(newDog){
    if(exports.usersDogs.length === 0)
        newDog._id = 1;
    else
        newDog._id = (exports.usersDogs[exports.usersDogs.length-1]._id)+1;
    exports.usersDogs.push(newDog);
    return newDog;
}

exports.del = function(id){
    let index = pos(id);
    let deleteDog = null;
    if(index >= 0){
        deteleDog = exports.usersDogs[index];
        exports.usersDogs.splice(index, 1);
    }
    return deleteDog;
}

/*exports.update = function(newDog){
    let index = pos(id);
    let existingDog = null;
    if(index >= 0)
    {
        exports.usersDogs[index] = existingDog;
        exports.usersDogs.splice(index, 0, existingDog);
    }
    return existingDog;
}*/

exports.update = function(newDog){
        let index = 1;
        let existingDog = {};
        existingDog._id = newDog._id;
        console.log('exisitng DOG ID IS: ', existingDog._id);
        if(existingDog.name !== newDog.name)
            existingDog.name = newDog.name;
        if(existingDog.weight !== newDog.weight)
            existingDog.weight = newDog.weight;
        if(existingDog.lifeExp !== newDog.lifeExp)
            existingDog.lifeExp = newDog.lifeExp;
        if(existingDog.description !== newDog.description)
            existingDog.description = newDog.description;
        
        exports.usersDogs.splice(newDog._id,1);
        exports.usersDogs.splice(newDog._id, 0, existingDog);
        return existingDog;
}

function pos(id){
    for(let i = 0; i < exports.usersDogs.length; i++)
    {
        if(exports.usersDogs[i]._id === id)
            return i;
    }
    return -1;
}
