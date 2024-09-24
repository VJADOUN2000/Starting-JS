const accountId = 45687;
let accountEmail = "jadoun@gmail.com";
var accountPassword ="12345";
accountCity = "Delhi";

let accountDate; //Undefined

// accountId =2; //not allowed
accountEmail="naresh";
accountPassword="6987";
accountCity ="Jaipur"

console.log(accountEmail);
/*
Prefer not to use var
because of issue of block scope and functional scope

*/
console.table([accountEmail,accountPassword,accountCity,accountDate]);
