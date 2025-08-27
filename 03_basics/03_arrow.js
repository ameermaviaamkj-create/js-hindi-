const user = {
    username : "Ameer Mavia",
    price : 999,

    welcomwMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomwMessage()
// user.username = "Abgeen Ameer"
// user.welcomwMessage()

// console.log(this)

// function chai(){
//     let username = "Mavia"
//     console.log(this.username);
    
// }
// chai()


// const chai=function(){
//     let username = "Mavia"
//     console.log(this.username);
// }


const chai=() => {
    let username = "Mavia"
    console.log(this);
}
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"Mavia"})
console.log(addTwo(3,4));





