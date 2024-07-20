class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){             //creating a method
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
//creating user
const vishal = new user("Vishal","vishal@gmail.com","001")
// console.log(vishal);
// console.log(vishal.encryptPassword());
// console.log(vishal.changeUsername());

//behind the scenes (without class)
function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){        //creating a method
     return`${this.password}abc`
}

User.prototype.changeUsername = function(){
     return`${this.username.toUpperCase()}`
}

const modiJi = new user("modiJi","modiJi@gmail.com","001")
console.log(modiJi);
console.log(modiJi.encryptPassword());
console.log(modiJi.changeUsername());