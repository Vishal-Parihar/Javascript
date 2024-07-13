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


