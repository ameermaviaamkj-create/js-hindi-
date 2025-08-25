const tinderUsers = {}

tinderUsers.id = "123abc"
tinderUsers.name = "Mavia"
tinderUsers.isLoggedIn = false

// console.log(tinderUsers);

const regularUser = {
    email:"mavia@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ameer",
            lastname:"Mavia"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4) 
const obj3 = {...obj1, ...obj2, ...obj4}  // Mostly we use spred type
// console.log(obj3);


const users = [
    {
        id:1,
        email:"ameer@.com"
    },
    {
        id:1,
        email:"ameer@.com"
    },
    {
        id:1,
        email:"ameer@.com"
    },
    {
        id:1,
        email:"ameer@.com"
    }
]

users[1].email
// console.log(tinderUsers);

// console.log(Object.keys(tinderUsers));
// console.log(Object.values(tinderUsers));
// console.log(Object.entries(tinderUsers));
// console.log(tinderUsers.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "JS in Hindi",
    price : "999",
    courseInstructer : "Hitesh"
}

const {courseInstructer:instructor} = course  // ager koi value bari ho to (courseInstructer:instructor) is tarah center mn : laga kar us ka name change kar sakte hn. 
// console.log(instructor);



               ////        API


// {
//     "name":"Mavia",
//     "coursename":"JS in Hindi",
//     "price" : "free"
// }

