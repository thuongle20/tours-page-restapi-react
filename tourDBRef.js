const DataStore = require('nedb-promises');
// Create NEDB instance for tourDB links it to disk file
let toursDB = DataStore.create(__dirname + '/toursDB');
module.exports = toursDB; // Shares tourDB instance