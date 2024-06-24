//this =  refers to cuuernt context

//*imp*
// for browser the global object is windows
//and for this node environment the global object is -{}

const user = {
  userName: "Vishal",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to the website`);
    console.log(this);         //prints both contexts of line 12 and 14 with different usernames
  },
};
// user.welcomeMessage();
// user.userName = "Ayush";
// user.welcomeMessage();

// console.log(this);           ///it gives empty parenthesis{} as there is no context in global object  imp



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      //here the output will be undefiend . This context only works for object 
// }

// chai()



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()                    //here also undefined output




//+++++++++++++++++ ARROW FUNCTION++++++++++++
//syntax : () =>{}

const chai = ( ) =>{
  let userName ="Sakshi"
  console.log(this);            //undefined output    this fn cannot be used with araow function
}


// const addition = (num1, num2) =>{                         //basic arrow function
//   return num1 +num2
// }
// console.log(addition(3,6))


// const addition =(num1, num2) =>num1 +num2              //Implicit return(no use of parenthesis)
const addition =(num1, num2) =>({userName: "Vishal"})         
console.log(addition(5,5));                            //{ } :use return statement,    () :no return statement use


