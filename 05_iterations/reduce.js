// reduce - A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce()
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
const myNum = [1,2,3]

const myTotal  = myNum.reduce( function (accumulator,currentValue) {
    // console.log(`accumulator is: ${accumulator}  , current value is: ${currentValue}`);
    return accumulator + currentValue
}, 0 )               // 0 = initial value of accumulator
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js  Course",
        price : 2999
    },
    {
        itemName : "pyhton course",
        price : 999
    },
    {
        itemName : "mobile dev",
        price : 5999
    },
    {
        itemName : "data science",
        price : 10999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) =>acc+item.price , 0)         //0 initial cart value
console.log(priceToPay);


