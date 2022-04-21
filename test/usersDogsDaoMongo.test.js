const dbcon = require('../model/DBConnection');
const dao = require('../model/usersDogsDAOMongo');

beforeAll(function(){
    dbcon.connect('test');
});

afterAll(async function(){
    await dao.deleteAll();
    dbcon.disconnect();
});

beforeEach(async function(){
    await dao.deleteAll();
});

test('Create new dog test',async function(){
    let newDog = {name:'TestDog',weight:'7 - 10 lbs',
                  lifeExp:'8 - 12 years',description:'This is a new dog.'};
    let createdDog = await dao.create(newDog);
    let foundDog = await dao.read(createdDog._id);
    expect(createdDog.name).toBe(foundDog.name); //assertion
});

test('Read All Test', async function(){
    let usersDogs = await dao.readAll();
    expect(usersDogs.length).toBe(0);
});

test('Read Test', async function(){
    let newDog = {name:'TestDog',weight:'7 - 10 lbs',
                  lifeExp:'8 - 12 years',description:'This is a new dog.'};
    let createdDog = await dao.create(newDog);
    let foundDog = await dao.read(createdDog._id);
    expect(createdDog.name).toContain(foundDog.name);
});

test('Delete a Dog Test', async function(){
    let allDogs = dao.readAll();
    let newDog = {name:'TestDog',weight:'7 - 10 lbs',
                  lifeExp:'8 - 12 years',description:'This is a new dog.'};
    let createdDog = await dao.create(newDog);
    let foundDog = await dao.read(createdDog._id);
    let deleteDog = await dao.del(foundDog);
    expect(allDogs.foundDog).toBe(undefined);
});

test('Update Dog Test', async function(){
    let existingDog = {name:'TestDog',weight:'7 - 10 lbs',
                  lifeExp:'8 - 12 years',description:'This is an existing dog.'};
    let createdDog = await dao.create(existingDog);
    let updatedDog = dao.update(createdDog._id, {description: 'This is a new updated dog.'});
    let allDogs = dao.readAll();
    expect(allDogs).toEqual(updatedDog);
   
});