//  Object literals

const JsUser = {
    name : "Ameer Mavia",
    age : 19,
    location:"Shujaabad",
    email:"mavia@google.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday","Sunday"]
}

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);

 JsUser.email = "mavia@Ameer.com"
//  Object.freeze(JsUser)
//  console.log(JsUser);
 

 JsUser.gretting = function(){
    console.log("Hello JS users");
 }
 JsUser.grettingTwo = function(){
    console.log(`Hello JS users,${this.name}`);
 }

 console.log(JsUser.gretting());
 console.log(JsUser.grettingTwo());
 

