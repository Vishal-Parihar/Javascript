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


function one(){
    const username = "hitesh"                  //bigger fn cannot access values of sub-fn inside it but smaller fn can
                                               //access values of parent fn
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);                //error out of scope

     two()

}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);                      //error
}

// console.log(username);                        //error


//[Function use case-1]
function addOne(num){                 
    return num+1
} 
console.log(addOne(5))


//[Function use case-2]              
const addTwo = function(number){                //this is sometime also called as an expression
    return number + 2 
}

console.log(addTwo(5))