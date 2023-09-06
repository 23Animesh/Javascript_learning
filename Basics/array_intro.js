arr = [5,10,15,20,25,30,35];
//console.log(typeof arr);
//console.log(arr);

arr2 = new Array("Animesh","mahesh","aryan",true);
//console.log(arr2);
//console.log(arr2[1]);         ....indexing of the array start with 0

//++++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++ 

//arr.push(40);              // add a element in last in array
//arr.pop();                 //remove the last element from the array

//arr2.unshift("Welcome");        //add a element in the first position in the array
//arr2.shift();                  //remove the first element form the array


/*arrnew = arr.slice(0,4);         // add the elements from the existing array
console.log("A",arrnew);
*/

arrnew2 = arr.splice(0,4);        // cut the part from the existing array and paste it in it whereas slice only copy that from it 
console.log("B",arrnew2);
console.log(arr);

