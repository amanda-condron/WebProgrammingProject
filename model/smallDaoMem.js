exports.smallDogs = [
    { _id:1,name:'Chihuahua', weight:'3.3 - 6.6 lbs', lifeExp:'12 - 20 years', description:1},
    { _id:2,name:'Yorkshire Terrier', weight:'4 - 6 lbs', lifeExp:'13 - 16 years', description:2},
    { _id:3,name:'Pomeranian', weight:'4.2 - 7.7 lbs', lifeExp:'12 - 16 years', description:2},
    { _id:4,name:'Shih Tzu', weight:'8.8 - 16 lbs', lifeExp:'10 - 16 years', description:2},
    { _id:5,name:'Pug', weight:'14 - 18 lbs', lifeExp:'12 - 15 years', description:2},
    { _id:6,name:'Dachshund', weight:'16 - 24 lbs', lifeExp:'12 - 16 years', description:2},
    { _id:7,name:'French Bulldog', weight:'16 - 24 lbs', lifeExp:'10 - 12 years', description:2},
    { _id:8,name:'Italian Greyhound', weight:'7.9 - 11 lbs', lifeExp:'12 - 15 years', description:2}

];

exports.readAll = function(){
    return exports.smallDogs;
}

exports.read = function(id){
    let index = pos(id);
    if(index >= 0) return exports.smallDogs[index];
    else return null;
}