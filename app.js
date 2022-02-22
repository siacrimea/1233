// const os = require("os");
// const greeting = require("./greeting");
// // получим имя текущего пользователя
// let userName = os.userInfo().username;

// console.log(`Сейчас ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require("./user");

// let eugene = new User("Eugene", 32);
// eugene.sayHi();
// eugene.displayInfo();
// console.log(eugene);

// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice

// var greeting2 = require("./greeting.js");
// console.log(`Hello ${greeting2.name}`);
// greeting2.name = "Bob";
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// greeting2.name = "Bob1";
// console.log(`Hello ${greeting1.name}`); //Hello Bob

// const welcome = require("./welcome");

// console.log(welcome.getMorningMessage());
// welcome.getEveningMessage();
//-----------------------

// const os = require("os");
// const greeting = require("./greeting");

// global.name = "Eugene";
// let userName = os.userInfo().username;
// global.console.log(date);
// console.log(greeting.getMessage());

// function display(data, callback) {
//     // с помощью случайного числа определяем ошибку
//     var randInt = Math.random() * (10 - 1) + 1;
//     console.log(randInt);
//     var err =
//         randInt > 5 ? new Error("Ошибка выполнения. randInt больше 5") : null;

//     setTimeout(function() {
//         callback(err, data);
//     }, 4000);
// }

// console.log("Начало работы программы");

// display("Обработка данных...", function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("Завершение работы программы");

// const fs = require("fs");

// // асинхронное чтение
// fs.readFile("hello.txt", "utf8", function(error, data) {
//     console.log("Асинхронное чтение файла");
//     if (error) throw error; // если возникла ошибка
//     console.log(data); // выводим считанные данные
// });

// // синхронное чтение
// console.log("Синхронное чтение файла");
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function() {
//     console.log("Hello all!");
// });

// emitter.on(eventName, function() {
//     console.log("Привет!");
// });

// //console.group(emitter);
// emitter.emit(eventName);
// //console.groupEnd(emitter);

const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function(data) {
    console.log(data);
    //console.log(eventName);
});

emitter.emit(eventName, "242352"); //, "Привет пир!");
console.log(eventName); //123