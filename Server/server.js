var http = require('http');
var url = require('url');

function startserver(route, handle) {
    function onRequest(request, response){
        var reviewDate = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request reveived " + pathname);
        request.setEncoding("utf8");

        request.addListener("data", function(chunk){
            reviewDate += chunk;
        });

        request.addListener("end", function(){
            route(handle,pathname, response,reviewDate);
        })
        
        
    }
    http.createServer(onRequest).listen(1000);
    console.log("Server started on localhost port 1000");
}
exports.startserver = startserver;