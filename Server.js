const dotenv = require('dotenv');
dotenv.config();
const dbCon = require('./model/DBConnection');
dbCon.connect();

const expressApp = require('./App');

let hostname = 'localhost';
let port = 4000;

const server = expressApp.app.listen(port,hostname,function(){
    console.log(`Server running in ${hostname}:${port}`);
});