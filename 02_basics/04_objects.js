// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email :"user@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Vishal",
            lastName : "Parihar"
        }
    }

}
// console.log(regularUser.fullName.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = {obj1, obj2}             //returns object of object     [Method1]
// console.log(obj3);

// const obj5 = Object.assign({},obj1,obj2,obj3)                 [Method2]
// console.log(obj5);

//   [Method 3]   Using spread operator    mostly used

const obj6 = {...obj1, ...obj2, ...obj3}
// console.log(obj6);

const users =  [
    {
        id :1,
        gmail : "b@gamail.com",
    },
    {
        id :2,
        gmail : "bac@gamail.com",
    },
    {
        id :3,
        gmail : "dddb@gamail.com",
    }
]
// console.log(users[1].gmail);

// console.log(tinderUser)

console.log(Object.keys(tinderUser));                   //bhery bhey important        returns array of object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    //makes an array by combining key and value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //searches/asks the obj it has specific value or not