student  = ["ravi","mohit","vishnu","mahesh","subh"];
attendes = ["yogesh","nihal","gopal","laksh"];

//student.push(attendes);         // it push whole array as a single element

// student.concat(attendes);          ..same as push 
//console.log(student);
//newarr = [...student,...attendes];     // it is called spread used to add elements from diff array

arr2 = [1,2,3,[4,5],6,7,[8,[9,20]]];
//console.log(arr2);
const new2 = arr2.flat(Infinity);             ///seperates nested array
console.log(new2);

mavi = Array.from('yuzivendar');            //creates  array from string
console.log(mavi);

let score = 1;
let score2 = 2;
let score3 = 3;
combined = Array.of(score,score2,score3);      // creates array from values
console.log(combined); 