import { sayHello } from './greet';


function hello(compiler: string){
    // template string => string interpolation
    let msg: string = `Hello World from ${compiler}`;
    console.log(msg);
}

hello('Typescript');

console.log(sayHello('TypeScript Again'));