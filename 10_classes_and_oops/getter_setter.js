// getter- gets the value from outside of the class
//setter - sets value inside the class
// this creates a race condition between constructor and the setters ,as both tries to set the value and maximizes the call stack as they are called repeatedly which creates call stack maximize error. To avoid this error the return value in getter and setter should be different from the constructor 


//using class - syntax1
//most used
class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return`${this._password}xyz`  //adds xyz to our password when someone tries to access it
    }
   // set password(value){
     //   this.password = value 
        //this creates a race condition between constructor and the setters ,as both tries to set the value and maximizes the call stack as they are called repeatedly which creates call stack maximize error. To avoid this error the return value in getter and setter should be different from the constructor 
 //}
 set password(value){
    this._password = value
}

get email(){
    return this._email.toUpperCase()
}

set email(value){
    this._email = value       //we dont use return in set
}
}

const vishal = new User("v@gmail.com","abc123")
console.log(vishal.password);