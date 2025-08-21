const name = "Ameer"
const repoCount = 50

//console.log(name +repoCount +" Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Abgeen-Ameer');

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,12)
console.log(anotherString);

const newStringOne = "     Ameer     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ameer.com/Ameer%20Mavia"
console.log(url.replace('%20','-'));
console.log(url.includes('Ameer Mavia'));

console.log(gameName.split('-'));
