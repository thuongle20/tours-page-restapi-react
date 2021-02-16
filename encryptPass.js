
const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./userTours.json');

let nRounds = 12;
let hashedUsers =[];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// Your code here to process the passworkds
let len=users.length;
console.log(len);
hashedUsers=users.map(function (u,i){
	let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
	let passHash = bcrypt.hashSync(u.password, salt);
	u.password=passHash;
	return u;
	
});
	

let elapsed = new Date() -start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("UserHash.json", JSON.stringify(hashedUsers, null, 2));