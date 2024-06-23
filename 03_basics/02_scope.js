//var c = 300          //global scope -their values can be accessed anywhere
let a = 300            

if (true) {                               //block scope - their values can only be accessed within the scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);     //a of value of 10 will be printed
    
}



// console.log(a);       //global value of a will be printed ie 300
// console.log(b);
// console.log(c);