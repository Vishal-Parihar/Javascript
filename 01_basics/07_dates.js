//DATES

let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate)

let newDate = new Date(2023,0,4)          //month in js starts from 0 
// console.log(newDate.toDateString());

let createdDate = new Date(2004,5,2,5,54)
// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(createdDate.getTime());

// console.log(Date.now());
// to convet in seconds
// console.log(Math.floor(Date.now()/1000));

let CurrDate = new Date()
// console.log(CurrDate);
// console.log(CurrDate.getMonth()+1);
// console.log(CurrDate.getDay());

console.log(CurrDate.toLocaleString('default',{
    weekday:"long"
}))


