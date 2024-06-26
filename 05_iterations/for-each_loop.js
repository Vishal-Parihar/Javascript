//for-each loop
// a call-back function dosen't have its name

const coding = ["js","py","rb","ts"]

// coding.forEach(function (value){                           //value = parameter
// console.log(value);
// })      

//using arrow function
coding.forEach( (item)=>{
    // console.log(item);
})


//we can also pass pre-defined fn in foreach loop
// function printMe(num){
//     console.log(num);
// }
// coding.forEach(printMe)


coding.forEach( (item , index , arr)=>{
// console.log(item,index,arr);
})


//[ {} , {}, {}]
const myCoding =[
    {
        languageName : "javascript",
        fileName :"js"
    },
    {
        languageName : "Python",
        fileName :"py"
    },
    {
        languageName : "java",
        fileName :"java"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    console.log(item.fileName);
})