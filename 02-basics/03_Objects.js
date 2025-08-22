//  Singleton

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Ameer Mavia",
    "fullName": "Abgeen Ameer",
    [mySym]:"myKey1",
    age:19,
    location:"Shujaabad",
    email : "mavia@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);

JsUser.fullName = "Abgeen Love Mavia"
// Object.freeze(JsUser)
JsUser.email = "mavia@mavia.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

