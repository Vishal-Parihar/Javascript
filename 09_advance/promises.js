//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//The Promise.resolve() static method "resolves" a given value to a Promise.
//The Promise.reject() static method returns a Promise object that is rejected with a given reason.
//create promise than consume it 

//CREATING PROMISE
const promiseOne = new Promise(function(resolve, reject){
//Do an async task
setTimeout(function(){
    console.log('Asynchronous task completed')
    resolve()  //to consume promise we need to use resolve method
},1000)
})

//CONSUMING PROMISE - using then
promiseOne.then( function(){
console.log('Promise Consumed');
})

//2nd way
new Promise(function(resolve,reject){
    setTimeout(function (){
        console.log("Asynchronous task completed");
    resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       //we can pass parameters in resolve and consume  it using '.then' mainly obj is passed as parameters
       resolve({username:'Vishal',email:'vishal@gmail.com'})
    },1000)
})
promiseThree.then(function(user){  //this user gets the data in resolve 
console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true          //checking for true condition
        if(!error){
            resolve({userName:"buntyBadmash",password:"000" })
        }
        else{
            reject('ERROR: SOMETHING NOT FOUND')
        }
    },1000)
})

//consume promiseFour
promiseFour
.then( (user)=>{          //user is a parameter in fn
     console.log(user);
     return user.userName
})
.then( (username)=> {                        //chaining , value from first then will be transferred here
console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false          //checking for true condition
        if(!error){
            resolve({userName:"Javascript",password:"001" })
        }
        else{
            reject('ERROR: SOMETHING NOT FOUND')
        }
    },1000)
})

//we can conusme promise using async - await also
//The keyword async before a function makes the function return a promise
//The await keyword can only be used inside an async function.
//The await keyword makes the function pause the execution and wait for a resolved promise before it continues
async function consumePromiseFive(){
    try {
        const response = await promiseFive     //recieves data
        console.log(response);         
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//function to get user from a api
// async function getUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/Vishal-Parihar')
//         const data = await response.json()             //converts the string values recived to json
//         console.log(data);
//     } catch (error) {
//         console.log("E :",error);
        
//     }
// }
// getUser()

//same above function using '.then'
fetch('https://api.github.com/users/Vishal-Parihar')
.then((response) =>{
    return response.json()
})
.then((data)=>{           //to handle the above data a second '.then' is used
    console.log(data);
})
.catch((error)=>console.log(error))