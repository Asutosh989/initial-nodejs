var connect = require('connect');
var http = require('http');

var app = connect();


function doFirst(request,response, next){
	console.log("Yo rock");
	next();
}


function doSecond(request,response, next){
	console.log("Yo tune");
	next();
}

app.use(doFirst); 
app.use(doSecond); 

http.createServer(app).listen(8000);
console.log("Server is running");

