//maps

const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newNum = numbers.map( (num) =>num + 10)
// console.log(newNum);

//chaining
const newNum = numbers
   .map( (num) => num * 10) 
   .map( (num) => num + 1 )              //value from above function will be passed here
   .filter( (num) => num >=40)
   console.log(newNum);
 
