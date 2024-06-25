
// <, >, <=, >=, ==, !=, ===, !==

const temperature = 35

// if(temperature == 35){
//     console.log("temerature is 35");
// }
// else{
//     console.log("temperature is greater than 35");
// }
// console.log("tu to hoga execute");

const balance = 1000
// if (balance >500) console.log("ameer party"),console.log("chup");         //pgl hai kya aise code mat likhna



// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}