// Boolean
let isToggled: boolean = false;

// Number
let age: number = 25;

// String
let lastName: string = "Carmichael";
let firstName: string = 'Charles';

// Template String
let heroName: string = `Deku`;

let sentence: string = `My name is ${heroName},

and I'am ${age} years old`;

// Array
// Same type
let numberList: number[] = [10, 20, 30];

let nameList: Array<string> = ['Sam', 'Tom', 'Luke'];

// Tuple
// fixed length and shape and possibly different types

let heroTuple: [string, number] = ['Bakugou', 16];

let heroTupleName: string = heroTuple[0];
let heroTupleAge: number = heroTuple[1];

// Enum
// Give friendly name to constants
// By default the series is 0, 1, 2, ...
enum ELEMENT { AIR, FIRE, EARTH, WATER };
let fireBenderElement: ELEMENT = ELEMENT.FIRE;

// Set the start = 1
enum DIRECTION { NORTH = 1, SOUTH, EAST, WEST };
let oneDirection: DIRECTION = DIRECTION.EAST;

// Set all values
enum DEVICE { PC = 10, LAPTOP = 20, SMARTPHONE = 30, CELLPHONE = 40, TABLET = 50, MAC = 60, CONSOLE = 70 };
let personalDevice: DEVICE = DEVICE.LAPTOP;

// GET corresponding alias for a value in an enum
let whatElement: string = ELEMENT[3]; // 'WATER'

// Any
// Unknown type coming from user or a library
// lets you call methods if it exists at runtime != Object
let whateverYouWant: any = 4;
whateverYouWant = "random string";
whateverYouWant = false;

whateverYouWant.decode(); // no error because will evaluate at runtime
whateverYouWant.load(); // no error because will evaluate at runtime

// WARN : Object = parent of all objects
let anObject: Object = 4;
anObject.decode(); // ERROR: property 'decode' does not exist on typ 'Object'

// Array of Any
let messyArray: any[] = [100, true, 'La La La'];


// Void
// absence of type
// return nothing in function

function emptyFunction(): void { };

// Null
let n: null = null;

// Undefined
let u: undefined = undefined;

// Never
// The type of value never occurs
// Used in function that will throw an error and will never return
function fail(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

// Symbol
// has a constructor
let sym1 = Symbol();

let key1 = Symbol("key1");
let sameKey1 = Symbol("key1");

// immutable and unique
key1 === sameKey1 // false


// object
// non-primitive type
// WARN : object != Object
declare function createFromObject(o: object): void;

let myObject: object = {
    name: "Miko",
    age: 22,
    isOld: false
};

createFromObject(myObject);

createFromObject(4); // ERROR, 4 is a primitive type

// Type assertion
// Tell the compiler that you know what you are doing
// Different from cast : does not convert in target type at runtime

let unknownType: any = "in the end it is a string";

// angle-bracket syntax
let strLength: number = (<string>unknownType).length;

let anotherUnknown: any = 11;

// as- syntax
10 < (anotherUnknown as number);