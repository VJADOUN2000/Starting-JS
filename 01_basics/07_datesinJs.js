let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString);

//console.log(typeof myDate);

//let newDate = new Date(2026,5,2)
//let newDate = new Date(2026,5,2,2,50)
//let newDate = new Date("2024-06-02")
//let newDate = new Date("02-06-2000")


//console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();

//console.log(myTimeStamp)
//console.log(newDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getFullYear());

newDate.toLocaleTimeString('default',{
  weekday: "long",
  timeZone:''  
})
