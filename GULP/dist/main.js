"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    // template string => string interpolation
    var msg = "Hello World from " + compiler;
    console.log(msg);
}
hello('Typescript');
console.log(greet_1.sayHello('TypeScript Again'));
