// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.
// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){         //cannot be accessed by everyone
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());