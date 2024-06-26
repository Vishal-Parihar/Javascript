//for of loop
//syntax-
// for (const iterator of object) {
    
// }
const myArray = [1,2,3,4,5]
for (const num of myArray) {
    // console.log(num);
    
}


const iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
//   console.log(value);
}


const greetings = "Namaste India"
for (const greet of greetings) {
    if(greet == " "){
      continue
    }
    // console.log(greet);
    
}


//MAPS - (key ,value) pair              
// - has all unique values

const map = new Map
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")

console.log(map);
for (const [key,value] of map) {
    console.log(key, "-", value);
    
}