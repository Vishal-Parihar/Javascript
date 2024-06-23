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
console.log(loginUserMessage());           // o/p - undefined just logged in