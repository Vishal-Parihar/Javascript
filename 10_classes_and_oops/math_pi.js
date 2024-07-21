// The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.
// The Object.getOwnPropertyDescriptor() method returns the property descriptors of an object.
// The Object.getOwnPropertyDescriptor() method does not change the original object.

const obj = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(obj);

// console.log(Math.PI)
// Math.PI = 5    //cannot be override
// console.log(Math.PI);    //still 3.14

const chai ={
    name: "ginger chai",
    price: 200,
    isAvailable:true
}
console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));  //undefined
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//in js we can define our own properties in objects
Object.defineProperty(chai,"name",{              //chai- obj name, name = for which we want to define properties , function: define ur properties
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}