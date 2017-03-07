var connect = require('connect');
var http = require('http');

var app = connect();


function profile(request,response){
	console.log("User requsted profile");
}

function forum(request,response){
	console.log("User requsted forum");
}
app.use('/profile', profile);
app.use('/forum',forum);

http.createServer(app).listen(8000);
console.log("Server is running");

