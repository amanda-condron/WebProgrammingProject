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
    expect(usersDogs.length).toBeGreaterThan(0);
});

test('Read Test', async function(){
    let usersDogs = dao.readAll();
    let dogID = 1;
    let dog = dao.read(dogID);
    expect(usersDogs).toContain(dog);
});