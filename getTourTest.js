const jRequest=require('request-promise-native');
const cookie = require('cookie');

let cookiejar = jRequest.jar();

//cookiejar.setCookie(cookie, 'http://127.0.0.1:3000');
var _include_headers = function(body, response, resolveWithFullResponse) {
  return {'headers': response.headers, 'data': body};
};

function printTours(tours)
{
	
	console.log(tours);
		
}
async function testGetTours(){
 let options={uri:'http://127.0.0.1:3000/tours',
				json:true,
				method: "GET",
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(options);
	console.log("Get Tours, num of tours:",res.length);
	console.log("Get Tours, cookie:", JSON.stringify(cookiejar));
	//console.log(res.headers);
	
	/*Try new code to get cookie
	let cookies = res.header['set-cookie'].map(cookie.parse);
        cookies= cookies.filter(c => c.hasOwnProperty('ja9848_TourSid'));
       
    let myCookie = cookies[0];
	console.log("cookie from new trying code:", myCookie);
	
	//End try code */

	}
	catch(err)
	{console.log(`Error: +${err}`);}
	console.log("=================");
	
}
async function getNumTours(){
 let options={uri:'http://127.0.0.1:3000/tours',
				json:true,
				method: "GET",
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(options);
	console.log("Get Tours, num of tours:",res.length);
	

	}
	catch(err)
	{console.log(`Error: +${err}`);}
	console.log("=================");
	
}
//testGetTours();

async function testAddTour(){
 console.log("Add tour");
 let options={uri:'http://127.0.0.1:3000/addtour',
				json:true,
				method: "POST",
				body:{type:"week", name:"New Tour to the Moon", date:"Dec 20, 2019"},
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(options);
	console.log("Add tour: ", res);
	console.log("Cookie after add tour: ", JSON.stringify(cookiejar));
	
	}
	catch(err)
	{console.log(`Error: ${err}`);}
	console.log("=================");
}


				
				
async function testGoodLogin(){
	let goodLoginOptions={
	uri:'http://127.0.0.1:3000/login',
				json:true,
				method: "POST",
				body:{"email": "airflow1828@live.com", "password":"F{0?N)9\\"},
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(goodLoginOptions);
	console.log("Cookie after good customer login:", JSON.stringify(cookiejar));
	console.log("The result of good customer login is user: ",JSON.stringify(res));
	}
	catch(err)
	{console.log(`Error: ${err}`);}
	console.log("=================");
}			
async function testBadEmailLogin(){
	let badEmailLoginOptions={
	uri:'http://127.0.0.1:3000/login',
				json:true,
				method: "POST",
				body:{"email": "aaa@live.com", "password":"F{0?N)9\\"},
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(badEmailLoginOptions);
	console.log("Cookie after bad login:", JSON.stringify(cookiejar));
	console.log("The result of bad email login is: ",JSON.stringify(res));
	}
	catch(err)
	{console.log(`Error: ${err}`);}
	console.log("=================");
}			
async function testBadPasswordLogin(){
	let badEmailLoginOptions={
	uri:'http://127.0.0.1:3000/login',
				json:true,
				method: "POST",
				body:{"email": "airflow1828@live.com", "password":"eh78"},
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(badEmailLoginOptions);
	console.log("Cookie after bad password login:", JSON.stringify(cookiejar));
	console.log("The result of bad password login is: ",JSON.stringify(res));
	}
	catch(err)
	{console.log(`Error: ${err}`);}
	console.log("=================");
}			

async function testAdminLogin(){
	let goodAdminLoginOptions={
	uri:'http://127.0.0.1:3000/login',
				json:true,
				method: "POST",
				body:{"email": "sided1830@outlook.com", "password":"C}m8\"L,F"},
				jar:cookiejar};
	let res;
	try{
	res=await jRequest(goodAdminLoginOptions);
	console.log("Cookie after admin login:", JSON.stringify(cookiejar));
	console.log("The result of admin login is: ",JSON.stringify(res));
	
	}
	catch(err)
	{console.log(`Error: ${err}`);}
}	
async function logout(){
	console.log("Log out");
	let logoutOption={uri:'http://127.0.0.1:3000/logout',
				json:true,
				method: "GET",
				jar:cookiejar};
				let res;
	try{
	res=await jRequest(logoutOption);
	console.log("Cookie after logout:", JSON.stringify(cookiejar));
	
	}
	catch(err)
	{console.log(`Error: ${err}`);}
}

//testLogin();				
//testAddTour();
async function testGood(){
	console.log("Test good login");
	let res;
	//test visit tour and print cookie
	try {
		res=await testGetTours();
	}
	catch (err)
	{
		console.log(err);
	}
	
	//test good login, print result and cookie, show the cookie change after login
	try{
		res=await testGoodLogin();
		
	}
	catch (err){console.log(err);};
	
	try{
		res=await logout();
		
	}
	catch (err){console.log(err);};
	
	console.log("=================");
	
}
async function testBadEmail(){
	console.log("Test bad email login");
	let res;
	//test visit tour and print cookie
	try {
		res=await testGetTours();
	}
	catch (err)
	{
		console.log(err);
	}
	
	//test good login, print result and cookie, show the cookie change after login
	try{
		res=await testBadEmailLogin();
		
	}
	catch (err){console.log(err);};
	
}
async function testBadPassword(){
	console.log("Test bad password login");
	let res;
	//test visit tour and print cookie
	try {
		res=await testGetTours();
	}
	catch (err)
	{
		console.log(err);
	}
	
	//test good login, print result and cookie, show the cookie change after login
	try{
		res=await testBadPasswordLogin();
		
	}
	catch (err){console.log(err);};
	
}
async function someTestLogin(){
	
	await testGood();
	
	await testBadEmail();
	await testBadPassword();
	
}
async function someAddTourTest(){
	
	/*await testAdminLogin();
	await getNumTours();
	await testAddTour();
	await getNumTours();
	await logout();
	await testGoodLogin();
	await getNumTours();
	await testAddTour();
	await getNumTours();
	await logout();
	await getNumTours();
	await testAddTour();
	await getNumTours();
	*/
	await testGetTours();
	
}


someAddTourTest();


