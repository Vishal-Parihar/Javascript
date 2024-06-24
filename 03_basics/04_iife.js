//(Immediately Invoked Function Expression ) is a JavaScript function that runs as soon as it is defined
// it is used to avoid pollution of global namesapces/variables
//syntax (function)()

(function chai() {

    //NAMED IIFE
  console.log(`DB CONNECTED`)
})();


( (name) =>{       //UNNAMED IIFE WITH PARAMETERS
    console.log(`DB CONNECTED 2 ${name}`);
})('Vishal')