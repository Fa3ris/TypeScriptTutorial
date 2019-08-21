// lET

let a: number = 10

// ######################
// BEFORE there was VAR
// FUNCTION-scoping
// ######################


// PROBLEMS

// Scoping in blocks
// var are accessible where they should not

// EXAMPLE 1
function f1() {
    var a = 10;

    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f1();
g(); // returns '11'
/* 
even though function f has finished executing and variable a is defined in function f, 
function g can access variable a and modify it
*/

// EXAMPLE 2

function f2(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f2(true);  // returns '10'
f2(false); // returns 'undefined'

/*
even if does not enter the if-block, variable x is still accessible
*/

// EXAMPLE 3

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) { // inner i overwrites outer i
            sum += currentRow[i];
        }
    }

    return sum;
}

/*
Can declare the same variable multiple times in different blocks and they will affect each other
*/

// EXAMPLE 4

for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

// Output 10 10 10 10 10 10 ...

/*
setTimeout executes the function after a number of milliseconds
the setTimeout functions will run AFTER the for loop has stopped
After the for loop, i == 10
each function sees the same i
*/

// Workaround
// IIFE  : Immediately Invoked Function Expression
// Execute immediately with the current value of i at the time

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

// Output 0 1 2 3 4 5 6 7 8 9

// ######################
// THEN came LET
// block-scoping or lexical-scoping
// ######################

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1; // b exists only in the if block
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}


// temporal dead zone : showy word to say cannot use a variable until it is declared


// cannot declare same variable multiple times in same scope

function f3(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g2() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}

// CONST

// cannot be reassigned
const b: boolean = true;

// BUT the values they refer to can still be changed
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// Prevent the change of the values with readonly


// Desctructuring

// For Array
// Unload an array into individual variable


let input = [1, 2];
let [first, second] = input;

function f4([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f4([1, 2]);

// swap variables
[first, second] = [second, first];

// unload the rest in a single variable
let [firstItem, ...restItems] = [1, 2, 3, 4];
console.log(firstItem); // outputs 1
console.log(restItems); // outputs [ 2, 3, 4 ]

// Extract desired elements
let [premier] = [1, 2, 3, 4];
console.log(premier); // outputs 1

let [, secondItem, , fourth] = [1, 2, 3, 4];
console.log(secondItem); // outputs 2
console.log(fourth); // outputs 4

// For Tuple

// Unload the tuple and keep give the corresponding type
let tuple: [number, string, boolean] = [7, "hello", true];

let [a1, b1, c1] = tuple; // a1: number, b1: string, c1: boolean

// cannot exceed range
let [a2, b2, c2, d2] = tuple; // Error, no element at index 3 i.e. d2

// Using rest syntax
let [a3, ...bANDc] = tuple; // bANDc: [string, boolean]
let [a4, b4, c4, ...d4] = tuple; // d: [], the empty tuple

// select desired element
let [a5] = tuple; // a: number
let [, b5] = tuple; // b: string

// JavaScript object destructuring


let o = {
    a6: "foo",
    b6: 12,
    c6: "bar"
};

// match property names
{ // use block to avoid name collision
    let { a6, b6 } = o;
}

// using rest syntax
let { a6, ...passthrough } = o;
let total = passthrough.b6 + passthrough.c6.length;

// using different names
let { a6: unusedName, ...local} = o;


// Optional parameters for function and default values

function keepWholeObject(wholeObject: { a: string, b?: number }) { // b is optional
    let { a, b = 1001 } = wholeObject; // b has a default value of 1001
}


// Spread
// Load an array with another array
let firstArray = [1, 2];
let secondArray = [3, 4];
let bothPlus = [0, ...firstArray, ...secondArray, 5]; // output : [0, 1, 2, 3, 4, 5]

// object spreading
// proceed from left to right, overwrite precedent properties with the same name
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

// search == { food: "rich", price: "$$", ambiance: "noisy" }