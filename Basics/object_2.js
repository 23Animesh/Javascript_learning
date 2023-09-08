// different methods of creating objects

players  = new Object;
//players = { }
players.id = "12";                                   //assignment of values in object
players.name = "virat kohli";
players.type = "batsman";
players.islefty = false ;
players.average = 45.85;

//console.log(players);
console.log(players.Keys);
ob = {1:"a",2:"b",3:"c",4:{
    "id" : 14,
    "lab" :true
}}

nb = { "ravi": "dalala",
   mouse : "not",
}
//console.log(ob);

console.log(Object.entries(players));                       // shows in arrays
 
updated = {...ob,...nb}                                       // creation of object from two object
console.log(updated);

const course = {
    coursename : "newLearning",
    price : 100,
    courseSub : "javascript"
}
 
// destructure in object
const {courseSub} = course
const {course : coursesub} = course 
console.log(courseSub);

//-------------------------API------------------
/*{
    "name" : "Animesh",
    "coursename" : "programming",
    "price" : true
} 
*/
