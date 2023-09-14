 // falsy values

/*false
0
-0
BigInt
0n
""
null
undefined
Nan
*/

//truthy values
// "0" ,'false'," ", [], {}, function(){}
const userEmail = [ ]
/*
if (userEmail.length === 0){
    console.log("array is empty");
}
*/


//Nullish Coalescing Operator (??); null undefined
let val1;
//val1  = 5 ?? 10             5
//val1 = null ?? 10           10
val1 = undefined??15          //15
//console.log(val1);

//terniary Operator

//condition ? true : false

const ice =  100
ice>=80 ? console.log("less than 80") : console.log('more than 80');