// Type checking focuses on shape
// refer to duck typing or structural subtyping

// EXAMPLE 1
{
    function printLabel1(labeledObj: { label: string }) { // takes as argument an object with label property
        console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" }; // this object has a label property so it validates, no order needed
    printLabel1(myObj);
}

{
    interface LabeledValue {
        label: string;
    }

    function printLabel2(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" }; // no need to indicate that it implements interface LabeledValue
    printLabel2(myObj);
}


// EXAMPLE 2
// Optional properties
{
    interface SquareConfig {
        color?: string; // optional
        width?: number; // optional
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({ color: "black" });

}

// EXAMPLE 3
// render immutable
{
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = { x: 10, y: 20 };
    
    p1.x = 5; // error, Cannot assign to 'x' because it is a read-only property.
    
}

// immutable Array with ReadonlyArray<T>
{
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    
    
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error, The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'
    

    a = ro as number[]; // override with type assertion

    a.length = 56; // ro modified too

    console.log(`ro.length = ${ro.length}`); // prints 56

}

// READONLY vs CONST

// readonly is for object properties
interface ReadOnly {

    readonly key1: string;
    readonly key2: number;
    readonly key3: boolean;
}

// const is for variables
const myConstant: string = 'I will no change';


// Function Types
// Reminder : EVERYTHING is an OBJECT

// define an interface for a function

interface SearchFunc {
    (source: string, subString: string): boolean; // function signature, takes two string parameters and returns a boolean
}

let mySearch: SearchFunc; // mySearch is of function type SearchFunc

mySearch = function(source: string, subString: string) { // assign a function value, 
    //parameters name need not match but order of types does
    
    let result = source.search(subString);
    return result > -1; // returns a boolean
}


// Index Types
// used to index properties of the interface

interface StringArray {
    [index: number]: string; // when search property by index, provide a number and property returned as a string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


// WARN : can index with number or string but actually number is converted to string
// so return type when indexing with number must be a type/subtype of return type when indexing with string
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface Okay {
    [x: number]: Dog; // Dog is a subtype of Animal
    [x: string]: Animal;
}

// Multiple return types with UNION
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;    // ok, length is a number
    name: string;      // ok, name is a string
}

// Immutable Index
{
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error, Index signature in type 'ReadonlyStringArray' only permits reading
}


// Class Types
// Classic, define properties and methods that it must implements

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}