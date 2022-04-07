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

test('Testing Update Dog', function(){
    let allDogs = dao.readAll();
    let idDogToBeUpdated = allDogs.length/2;
    if(allDogs.length > 0){
        let existingDog = dao.read(idDogToBeUpdated);
        existingDog.description = 'New Test Description';
        let saved = dao.update(existingDog);
        let newDogs = dao.readAll();
        expect(newDogs).toContain(saved);
    }
    
})

test('Useless test', function(){
    expect(1).toBe(1);
});