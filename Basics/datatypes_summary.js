/* #primitive data types             (call by value)
 
 7 primitive data types are :-
 string
 Number
 Boolean
 null
 undefined
 Symbol
 BigInt


#Reference (Non primitve)

Array,Objects,Functions
*/

//const ID = Symbol("123");
//const ID1 = Symbol("123");
//console.log(ID === ID1 );         o/p False

const hero = ["rocky","rani","prem"];       //array
let mani = hero;
console.log(typeof mani);
let obj = {                               //object
    name:"mohan",
    age: 19,
}
console.log(typeof obj);
const myFunction = function(){            //symbol
    console.log("hello");
}

console.log(typeof myFunction);  


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// stack memory(primitive) copy militi hai isme

//heap(non primitive)      original changes har jagah honge
