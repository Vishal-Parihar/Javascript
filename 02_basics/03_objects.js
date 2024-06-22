// ways to declare objects- i) Variable/literals      - can have multiple instances
//                          ii) constructors    -  creates a singleton object       - eg:  Object.create



//+++++++++++++++++++Object literals++++++++++++++++++++++++++++++

const mySym = Symbol("Key1")    //symbols- used to add unique property keys to an object
const jsUser = {
    name :"Vishal",
    "full name" :"Vishal Parihar",
    [mySym] : "myKey1",        //[] - syntax of symbol
    age : 19,
    location : "Delhi" ,
    email : "vishal@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["tuesday","friday"]
}

// console.log(jsUser.email);        //1st way
// console.log(jsUser["email"]);     //2nd way

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vishal@yahoo.com"          //override email
// Object.freeze(jsUser)                     // freeze disables to change the values. Now no values can be changed
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS learner");
}
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello JS learner,${this.name}`);           //this is used to refer key of same object
}
console.log(jsUser.greetingTwo());



