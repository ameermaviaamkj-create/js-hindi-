// premitive data type

const { useInsertionEffect } = require("react");

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
 let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 72364923746982n



// Reference datatype(Non premetive)

// Array, objects, Functions

const heros = ["Ameer Mavia","Abgeen Ameer","Ameer Son"]
let myObj = {
    name: "Ameer mavia",
    age:19,
}

const myFunction = function(){
    console.log("Abgeen Ameer");
}

console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Memories
// Stack (Premitive), Heap(Non_primitive)

let myYoutubename = "AmeerMavia"

let anothername = myYoutubename
anothername = "Abgeen Ameer"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl",
}
let userTwo =userOne;

userTwo.email = "mavia@google.com";

console.log(userOne.email);
console.log(userTwo.email);