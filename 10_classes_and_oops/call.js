function setUsername(username) {
    this.username = username
}
function createUser(username, email, password) {
    // setUsername(username)   //cannot access username. Only refrence is passed, function is not called
    setUsername.call(this,username)  //now fn is called  ('.call' - holds the refrence of the function)
    this.email =email
    this.password = password
}

const firstUser = new createUser("Vishal", "v@gmail.com","111")
console.log(firstUser);