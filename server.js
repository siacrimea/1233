let http = require("http");
http
    .createServer(function(request, response) {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        //response.write();
        response.end("Hello");
    })
    .listen(3000);