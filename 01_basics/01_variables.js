/*
Prefer not to use 'var' variable cause of it issue in block scope and functional scope
*/

const accountId = 14455
let accountEmail ="vishal@gmail.com"
var accountPassword = "5321"
accountCity = "Delhi"

// accountId = 123 not allowed

// changing values
accountEmail = "vp@gmail.com"
accountPassword = "1122"
accountCity = "Bageshwar"

console.log(accountId);
console.table([accountId ,accountEmail, accountPassword, accountCity])
