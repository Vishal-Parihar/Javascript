//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)     
// myArr.push(7)
// myArr.pop()            //removes last element

// myArr.unshift(9)         // adds element in the starting of an array
// myArr.shift()            // removes element from the starting of an array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()          //binds the array and convert them into string type

// console.log(myArr);
// console.log( newArr);


// slice, splice

// slice- slice out a piece from an array.It creates a new array .   it dosen't manipulates origianal array
// splice- can be used to add new items in an array .eg (1,3) starting from 1 it will remove 3 elements. 
//manipulates original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //here upper value is not considered i.e 1,2 (element at pos 1&2 are returned)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);