// Creating a Server in Node.

var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello Elija is working on this for something good to come out of it!!!!");
    response.end();
}).listen(5000);