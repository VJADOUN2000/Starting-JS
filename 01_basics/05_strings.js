const name = "VIKRANT";
const repoCount ="6";

//console.log(name + repoCount+" value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Vikrant-hc-gh-th');


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('Z'));

const newString =gameName.substring(0,4);

console.log(newString);
const anotherString =gameName.slice(-6,2);

console.log(anotherString);

const newStringOne = "      Vikrant    "

console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https//vikrant.com/vikrant%20jadoun";

console.log(url.replace('%20','-'));

console.log(url.includes('vikrantsingh'));

console.log(gameName.split('-'))