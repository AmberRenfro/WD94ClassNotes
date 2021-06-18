let phrase = "Hello";
let name = "Amber";

console.log(phrase + "" + name)

console.log(`$`)

//Booleans
let on = true;
let off = false;

//Null
//intentional empty variable
let empty = null;

//Undefined
//starts empty but we intend to fill it
let undef = undefined;
//let undef;

//Numbers
let degrees = 90;
let precise = 999999999999999
console.log(precise);
//will round after 15 characters

//Strings
let stringone = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;

let first = 1050 = 100;
let second = "1050" + "100";
let third = 1050 + "100";
console.log(first, second, third);

//Objects
let frodo = {
    race: "Hobbit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//Arrays
let list = ["item1, item2, item3"]

console.log(typeof list);

/*
DataType literals are fixed values that we as developers insert into the code, not data that is coming from a third party source.
*/

let myName = "Donovan";
console.log(myName.length)
//will return 7 as in 7 characters in the string

console.log(myName.toUpperCase())
//will return DONOVAN

let home ="My home is in greenwood";
console.log(home.includes("greenwood"))

let sent = "This sentencee will be split into individual parts";
console.log(sent.split(""))
//will return ["this', "sentece", "]

