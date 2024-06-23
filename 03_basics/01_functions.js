//functions

function printName() {
    console.log("vishal");
    console.log("Parihar")
}
//printName()  // printName - refrence   ,   printName() - calling/execution



//[METHOD-1]
// function addNumbers(num1 , num2){               //num1,num2 are parameters
//     console.log(num1+num2);
// }
// // addNumbers(2,3)                                  //(2,3) are arguments
// const result =addNumbers(2,3)
// console.log("result:" ,result);              //above it will print 8 but it will not return anything, so if we check value of result here
                                             // it will be undefined


  //[METHOD-2]
function addNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result = addNumbers(5,4)
// console.log("result:", result);



function loginUserMessage(userName) {
    if(!userName){                          //(!username)  =  (username === undefined)
        console.log("Please enter a username"); 
        return                                        //msg after return will not be printed
    }
    return `${userName} just logged in `
}
// console.log(loginUserMessage("Vishal"))
// console.log(loginUserMessage());           // o/p - undefined just logged in


// function calculateCartPrice(number1){
//     return number1
//     }
//     console.log(calculateCartPrice(500)); 

function calculateCartPrice(...number1){               //(...  = rest and spread operator)
    return number1
}
// console.log(calculateCartPrice(100,200,300,400));      // returns array of numbers used in cart updation in ecommerce websites


function calculateCartPrice(val1,val2,...number2){               //(...  = rest and spread operator)
    return number2
}
// console.log(calculateCartPrice(10,20,30,40));     // here 10,20 are assigned to val1 and val2 and rest of the values are printed in array

const user = {
    userName :"Vishal",
    userId :"0021"
}

function objectHandle(anyobject){
    console.log(`Username is ${anyobject.userName} and userId is ${anyobject.userId}`);
}
// objectHandle(user)
objectHandle({                                     //obj can be defined here also
    userName : "Mohan",
    userId :123
})

const myNewArray = [100,200,300,400,500]
function getArrValue(getArray){
    return getArray[2]                     //returns second value of array
}
// console.log(getArrValue(myNewArray));\
console.log(getArrValue([1,2,3,4,5]));
