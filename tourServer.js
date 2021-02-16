const myExpServer=require('express');
const app=myExpServer();
const DataStore = require('nedb-promises');
const toursDB= require('./tourDBRef.js');
const session = require('express-session');
const bcrypt = require('bcryptjs');
var cookieParser = require("cookie-parser"); // For cookies
app.use(cookieParser());

const usersDB = new DataStore({filename:'./usersDB', autoload: true});
//const toursDB = new DataStore({filename:'./toursDB', autoload: true});

app.use(myExpServer.json());

const cookieName = "ja9848_TourSid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
    secret: 'ja9848_CS651',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

const sessionMiddleware = function (req, res, next) {
    //console.log(`session object: ${JSON.stringify(req.session)}`);
  //  console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};
app.use(sessionMiddleware);

const checkCustomerMiddleware = function (req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({error: "Not permitted"});
        } else {
        console.log(`Session info: ${JSON.stringify(req.session)} \n`);
        next();
    }
};
// User this middlewave to restrict paths only to admins
const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};


async function findUser(email){
	let user=await usersDB.findOne({email:email});
	return user;
}
async function getUsers(){
	let users=await usersDB.find({});
	return users;
}



app.post('/login', function (req, res) {
    //console.log("Beforelogin cookie:",JSON.stringify(req.cookies));
    let email = req.body.email;
    let password = req.body.password;
	
	
	findUser(email).then(function (auser){if (auser==undefined) {// Not found
        res.status(404).json({error: true, message: "User/Password error"});
        return;
		
    }
	console.log(auser);
    let verified = bcrypt.compareSync(password, auser.password);
	

	
    if (verified) {
        // Upgrade in priveledge, should generate new session id
        // Save old session information if any, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            if (err) {console.log("Error generating session"+err);}
            let newUserInfo = Object.assign(oldInfo, auser);
            delete newUserInfo.password;
            req.session.user = newUserInfo;
	
            res.json(newUserInfo);
		
        });
    } else {
        res.status(401).json({error: true, message: "verified User/Password error"});
    }}).catch(err=>console.log(err));
 
});

app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options); // the cookie name and options
        res.json({message: "Goodbye"});
    })
});
async function getTours(){
	let tours=await toursDB.find({});
	return tours;

}
async function getATour(tourid){
	let tour=await toursDB.findOne({_id:tourid});
	//console.log(tour);
	return tour;

}
app.get('/tours', function(req,res) { 
									//console.log("Cookie before login:",JSON.stringify(req.cookies));
									getTours().then(tours=>{res.json(tours);}).catch(err=>console.log(err));
			
	
});
//get a specific tour
app.get('/tours/:tourid', function(req,res) { 

									//console.log("Cookie before login:",JSON.stringify(req.cookies));
									getATour(req.params.tourid).then(tour=>{if (tour==null) res.status(404).json({message: "Tour Not found"});else res.json(tour);}).catch(err=>console.log(err));
									
			
	
});

async function addTour(tour){
		
	let newTours=await toursDB.insert([tour]);
	//console.log(newTours);
	return newTours;
	
}
app.post('/tours/newtour',checkAdminMiddleware, myExpServer.json(), async function(req,res) { 
									
										//let tour={type: "week", name:"Hello", date: "10/10/2020"};
										try{
											let tours=await addTour(req.body);
											res.json(tours);
										}
										catch(err){
											console.log("Err:",err);
										}
								
	
});


app.delete('/tours/:tourid',checkAdminMiddleware, myExpServer.json(), async function(req,res) { 
									
										
										
										try{
											let tours=await toursDB.remove({ _id: req.params.tourid});
											console.log("Delete success");
											res.json(tours);
											
										}
										catch(err){
											console.log("Err:",err);
										}
								
	
});



module.exports=app;

