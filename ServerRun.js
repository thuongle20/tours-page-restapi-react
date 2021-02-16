
const app=require('./tourServer.js');
let port=1771;
let host='127.0.0.11'

app.listen(port, host, function(){console.log(`myExpress server ${host} is listening on port ${port}`)});


