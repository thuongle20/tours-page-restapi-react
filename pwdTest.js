const bcrypt = require('bcryptjs');
// Hashing a password prior to storage
let salt = bcrypt.genSaltSync(10); // New salt everytime!
let passHash = bcrypt.hashSync("MyPassWordThing", salt);
console.log(passHash);