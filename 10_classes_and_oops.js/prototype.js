//Prototypes are the mechanism by which JavaScript objects inherit features from one another

// All JavaScript objects inherit properties and methods from a prototype:
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.greetVishal = function(){
    console.log(`Vishal says hello`);             //here we created a prototype of array(given power)
}


Object.prototype.vishal = function(){                      //we created a prototype of object so all arrays,functions,strings can acess it
    console.log(`vishal is present in all objects`);
}

heroPower.vishal()
myHeros.vishal()           
myHeros.greetVishal()
heroPower.greetVishal()   //object cannot be accessed with array power



//-------------------INHERITANCE-----------------------
//Prototipal inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport           //gives a refrence of TeachingSupport and now has access to its values 
}

Teacher.__proto__ = User       //teacher can also access now all properties of the user

//------MODERN SYNTAX-------

Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
