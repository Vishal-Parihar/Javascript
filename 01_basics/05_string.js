const name = "vishal"
const age = 20
 
//console.log(name +  age + " DIT");  outdated way

//console.log(`Hello my name is ${name} and my age is ${age}`); 

const gameName = new String('ChalHat')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());  //original value dont get changed

// console.log(gameName);
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('h'));
// const newString = gameName.substring(0,3)
// console.log(newString)  

const anotherString =  gameName.slice(1,3)
// console.log(anotherString);

const var1 = "   Vishal"
// console.log(var1);
// console.log(var1.trim());      //trim removes extra spaces from a string

const url = "CodeTogether.com/Services%20about"
// console.log(url.replace('%20','-'));
// console.log(url.includes('Together'))

const var2 = "Hello-01-delhi"
console.log(var2.split('-'));