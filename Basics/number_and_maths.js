
const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());   //convert it to the string
console.log(balance.toFixed(2));   // way to the decimal part e.g 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));   //give precision value of to the given number

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));    //add commas to the numeric value

//+++++++++++++++++++++++++++++++ MATHS FUNCTIONS++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-17));                   //gives absolute value (minus to positive)
console.log(Math.round(4.7));                //convert it into round off
console.log(Math.ceil(4.2));                //similar to round but takes upper value
console.log(Math.floor(4.2));               //similar to round but takes lower value
console.log(Math.min(1,9,0,0.4,-1.2,56));   //gives mi value
console.log(Math.max(1,9,0,0.4,-1.2,5));    //gives max value

console.log(Math.random());                //gives random value
console.log((Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)));