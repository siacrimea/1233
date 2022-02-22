const http = require("http");

http
    .createServer(function(request, response) {
        response.setHeader("Content-Type", "text/html; charset=utf-8;");

        if (request.url === "/home" || request.url === "/") {
            console.log(request.url);
            response.write("<h2>Home</h2>");
        } else if (request.url == "/about") {
            console.log(request.url);
            response.write("<h2>About</h2>");
        } else if (request.url == "/contact") {
            console.log(request.url);
            response.write("<h2>Contacts</h2>");
        } else {
            console.log(request.url);
            response.write("<h2>Not found</h2>");
        }
        response.end();
    })
    .listen(3000);