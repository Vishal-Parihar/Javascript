//everything in javascript is an object
//even function is an onject

//The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

function multipleBy5(num){
 return num*5
}

multipleBy5.power = 2     //fn can be accessed using '.' ; this means function is an obj

console.log(multipleBy5(5));
console.log(multipleBy5.power);    //2 will be printed
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username        //this seperates local username with parameter username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){          //we can inject our own defined properties in a function
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)         //new keyword creates a new object in the memory
const tea = createUser("tea", 250) 

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/