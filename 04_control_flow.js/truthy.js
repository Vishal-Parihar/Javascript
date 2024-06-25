//truthy values - they are assumed to be true when encountered in boolean context
//falsy values - A falsy/falsey value is a value that is considered false when encountered in a Boolean context

const userEmail = [ ]
if(userEmail) {
    console.log("got user email");
}
else{
    console.log("don't got user email");
}

//falsy values =  false, 0, -0, BigInt 0n, "", null, undefined, NaN


//tuthy values = "0",'false'," "(space so truthy), {}, [], function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {}                               //checks for empty object
// if (Object.keys(emptyObj).length === 0) { 
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefinedThe nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.                 
//works on null and undefined values

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")