//Primitive

// 7 Types : STtring, Number, Boolean, Undefined, Null, Symbol, BigInt  [Call By value]

const score = 33;
const score2 = 33.23;

const isLoggedIn = false;
const temp = null
let userEmail;

const id = Symbol('123');
const id2 = Symbol('123');

console.log(id===id2)

//Non-Primitive or Reference type

// Array, Object, Functions  [Call by reference]


const heros= ["ironman","Hulk","blackwidow"]

 let Obj ={
    name: "vikrant",
    age:'22',
}

const myFunction=function(){
    console.log("Hello VJ!");
    
}

let arr = ['abhi','vikrant','VJ'];

let Obj1 ={
    name: "VIKRANT",
    age : "24"
}

const sdd=function(){
    console.log("Printing Function")
}
// console.log(arr);
// console.log(Obj1);
//console.log(sdd)

//console.log(typeof heros);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname = "VIKRANTJADOUN"

let anothername = myname;
anothername ="Chaiaurcode"

//console.log(anothername);
//console.log(myname);

let user1={
    email: "jadounvikrant@gmail.com",
    upi: "9811920084@ypl"
}

let user2 =user1

const bigIn= 546515445n;

user2.email ="abhijadoun@gmail.com";

//console.log(user1.email);

console.log(typeof bigIn);






