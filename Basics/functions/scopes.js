//{}               scope
var c = 300 
let a= 13                       //global scope
if (true){
    let a = 10                    //defined only in local scop
    const b = 20              
    var c = 30
    console.log("diff value of a in local scope",a);
 }

console.log(a);
//console.log(b);
console.log(c);

//global variables is available throughout the program while local is defined only within the blocks