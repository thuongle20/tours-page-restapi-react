const DataStore = require('nedb-promises');
const dbUsers = DataStore.create(__dirname + '/usersDB');
const dbTours = DataStore.create(__dirname + '/toursDB');
const users = require('./userHash.json');
const tours = require('./tours.json');

async function initializeUsers() { // so I can await!
    try {
        let numRemoved = await dbUsers.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} users`);
        let newDocs = await dbUsers.insert(users);
        console.log(`Added ${newDocs.length} users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

async function initializeTours() { // so I can await!
    try {
        let numRemoved = await dbTours.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await dbTours.insert(tours);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}
initializeUsers(); // don't forget to run the async function
initializeTours();