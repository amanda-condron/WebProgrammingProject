const dao = require('../model/usersDogsDaoMem');

test('Testing ReadAll', function(){
    let usersDogs = dao.readAll();
    expect(usersDogs.length).toBeGreaterThan(0);
});

test('Testing Read', function(){
    let usersDogs = dao.readAll();
    let dogID = 1;
    let dog = dao.read(dogID);
    expect(usersDogs).toContain(dog); 
});

test('Testing Create New Dog', function(){
    let newDog = {name:'Test', weight:'24-23 lbs', lifeExp:'13 -15 years', description:'Large fluffy dog.'};
    let beforeSize = dao.readAll().length;
    let saved = dao.create(newDog);
    let allDogs = dao.readAll();
    expect(allDogs.length).toBe(beforeSize+1);
    expect(allDogs).toContain(saved);
});

test('Testing Delete a Dog', function(){
    let beforeSize = dao.readAll().length;
    if(beforeSize > 0){
        let deleteDog = dao.del(1);
        let allDogs = dao.readAll();
        expect(allDogs.length).toBe(beforeSize-1);
    }
    
});

test('Testing Update Dog', function(){
    let allDogs = dao.readAll();
    let updatedDog = dao.update(1);
    expect(allDogs).toContain(updatedDog);   
});
