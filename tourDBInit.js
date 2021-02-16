const DataStore = require('nedb-promises');

const toursDB= require('./tourDBRef.js');
const tours = require('./tours.json');


async function initTourDB() { // so I can await!
    try {
        let numRemoved = await toursDB.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await toursDB.insert(tours);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}
module.exports=initTourDB;