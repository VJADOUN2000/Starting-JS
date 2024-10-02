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

console.log(typeof myFunction);

