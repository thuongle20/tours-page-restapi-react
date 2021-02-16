const jRequest=require('request');


function printTours(res)
{
		
	for (i=0;i<res.length;i++)
	{
		console.log(`Tour ${i+1}: name is ${res[i].name}, type is ${res[i].type}, date is ${res[i].date}`);
		
	}
		
}
	let name="New added Tour";
	let type="Century";
	let date="Dec 25, 2019";
	//requestlink=`http://127.0.0.1:3000/tours/add/${name}/${type}/${date}`;
	
	
	/*jRequest.get(requestlink,
		function(error, response, body){
			if (error) {
				console.log('error:', error);
				return;
				};
			
			printTours(JSON.parse(body));
		*/
			
	var jsTour={'name':name,'type':type, 'date':date};

			
	jRequest.post({
    url: 'http://127.0.0.1:3000/tours/add',
    body: jsTour,
    json: true
  }, function(error, response, body){
			if (error) {
				console.log('error:', error);
				return;
				};
			console.log(body);
		/*	try {printTours(JSON.parse(body));}
			catch(e)
			{console.log(`Sorry, you got an error: \n ${e}`);
			}*/
			
});




