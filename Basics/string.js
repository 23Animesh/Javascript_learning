const name = "Animesh"
const surname = " Dutta"

//console.log(name + surname);
//console.log(`Hello my name is ${name} and my surname is ${surname}`);
 
// string functions
const game = new String("HELLO user");
console.log(game[2]);              //indexing of the string
 
console.log(game.length);          // length of the string
console.log(game.toLowerCase());   // convert it into a lower case 
console.log(game.charAt(2));       //find the value at that position
console.log(game.indexOf("O"));    // same as charAt but finds it with the index

const newstr = game.substring(0,5)    // create new string from existing substring
console.log(newstr);    

const anotherstr = game.slice(0,7)   // slice the unnecessary part to new string
console.log(anotherstr); 

const trial = "  nothing   "
console.log(trial);
console.log(trial.trim());             // trim the extra spaces from the string


// some popular functions are 


/* String length()
 String slice()
 String substring()
 String substr()
 String replace()
 String replaceAll()
 String toUpperCase()
 String toLowerCase()
 String concat()
 String trim()
 String trimStart()
 String trimEnd()
 String padStart()
 String padEnd()
 String charAt()
 String charCodeAt()
String split()
*/

/*

for more info visit this   https://www.w3schools.com/js/js_string_methods.asp 

*/


