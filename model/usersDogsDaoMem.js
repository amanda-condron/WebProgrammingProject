exports.usersDogs = [];

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

exports.update = function(id){
    //homework
}

function pos(id){
    for(let i = 0; i < exports.usersDogs.length; i++)
    {
        if(exports.usersDogs[i]._id === id)
            return i;
    }
    return -1;
}
