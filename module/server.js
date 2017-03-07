var http = require ('http');
var d= require('fs');

//404 respone
function send404(response) {
	response.writeHead(404, {"Content-Type":"text/plain"});
	response.write("Wrror 404: PAge not found");
	response.end();

}

//handle user request


function onRequest(request, response) {
	
	if (request.method == 'GET' && request.url=='/home'){
		response.writeHead(200, {"Content-Type":"text/html"});
		d.createReadStream("./index.html").pipe(response);

	}
	else {
		send404(response);
	}
}


http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
