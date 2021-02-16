const jRequest=require('request');

function testLogin(jsUser){
			
		jRequest.post({
		url: 'http://127.0.0.1:3000/login',
		body: jsUser,
		json: true
	  }, function(error, response, body){
				if (error) {
					console.log('error:', error);
					return;
					};
				console.log(body);
			
				
	});
}

var jsUser1={"email":"sided1830@outlook.com","password":"C}m8\"L,F"};
var jsUser2={"email":"ox1815@live.com","password":"C}m454"};
var jsUser3={"email":"hello@test.com","password":"C}m454"};

testLogin(jsUser1);
testLogin(jsUser2);
testLogin(jsUser3);