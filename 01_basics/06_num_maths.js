const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));          // adds n decimal after the number

const numTwo = 123.8355
// console.log(numTwo.toPrecision(5));       //rounds of number acc to the value given

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));                 //absolute value , returns +ve integer
// console.log(Math.round(2.5));
// console.log(Math.ceil(6.3));            // (ceiling)rounds of number to the upper valuef
// console.log(Math.floor(9.9));           // rounds of the number to the lower value
// console.log(Math.min(3,6,45,31));
// console.log(Math.max(1,3,4,5,6,))

console.log(Math.random());
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)