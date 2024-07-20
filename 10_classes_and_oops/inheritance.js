class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)      
        this.email
        this.password
    }

    addCourse(){
        console.log(`A new course is added by: ${this.username}`);
    }
}
const user1 = new teacher("Pappu","P@gmail.com","4321")
user1.addCourse()
user1.logMe()

const user2 = new user("Vishal")
user2.logMe()       //has access of logMe

console.log(user1 instanceof teacher);   //true
console.log(user1 instanceof user);     //true