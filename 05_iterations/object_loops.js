//for-in loop


const myObject ={
    js : "javascript",
    rb : "ruby",
    py : "python",
    ts : "typesctipt"
}
for (const key in myObject) {
    // console.log(`${key} is for - ${myObject[key]}`);
   
}


//but when we use for-in loop in arrays we get keys as o/p (0,1,2,3) instead of actual values
const languages = ["javascript","py","rb","ts"]

for (const key in languages) {
    // console.log(key);          //returns keys (0,1,2,3)
    console.log(languages[key]);
  } 
