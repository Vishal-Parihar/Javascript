//using objects - syntax 3

//less used

 const user = {
    _email: 'vishal@gmail.com', 
    _password: 'dcxs',

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }
 }
 const tea = Object.create(user)
 console.log(tea.email);      //_email acts as a private property here, so it can be accessed using email