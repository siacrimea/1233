// // получаем модуль Express
// const express = require("express");
// // создаем приложение
// const app = express();

// // устанавливаем обработчик для маршрута "/"
// app.get("/", function(request, response) {
//     response.end("Hello from Express!");
// });
// // начинаем прослушивание подключений на 3000 порту
// app.listen(3000);

// let var0 = process.argv[0];
// let var1 = process.argv[1];
// let name1 = process.argv[2];
// let age = process.argv[3];

// console.log("name00: " + var0);
// console.log("name01: " + var1);
// console.log("name: " + name1);
// console.log("age: " + age);

const http = require("http");

let message = "Hello World!";
http
    .createServer(function(request, response) {
        console.log(message);
        response.end(message);
    })
    .listen(3000, "127.0.0.1", () => {
        console.log("Сервер начал прослушивание запросов");
    });