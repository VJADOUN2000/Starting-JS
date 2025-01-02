const accountId = 45687;
let accountEmail = "jadoun@gmail.com";
var accountPassword ="12345";
accountCity = "Delhi";


// accountId= 2; Not Allowed
accountEmail = "abhijadoun@gmail.com";
accountPassword ="54321";
accountCity = "Noida";


let accountDate; //Undefined

accountEmail="naresh";
accountPassword="6987";
accountCity ="Jaipur"

console.log(accountEmail);
/*
Prefer not to use var
because of issue of block scope and functional scope

*/
console.table([accountDate, accountEmail, accountId, accountPassword, accountCity])