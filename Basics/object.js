// creation of object                                                         <1>singleton    <2> object literals 
                                         //object works in key value pair
 const student = {
    name : "Animesh",
    age : 19,
    email : "aanimesh@gmail.com",
    isLoged : true,
    lastActive : ['monday','wednesday','friday']
 }

 //accessing element from the object
 console.log(student.name);
 console.log(student.lastActive);
 console.log(student['name']);             // this is also one of the methods to access the elements from the object

 //updation of the value in object 
 student.email = "none@gmail.com"
 console.log(student['email']); 

 // freeze is the keyword that restrict the updation of values

student.greeting = function(){
    console.log("welcome to the university ");
 }

console.log(student.greeting());
student.greeting2 = function(){
    console.log(`welcome to the university ${this.name} you will get all your infomation through the given mail id ${this.email}`);
 }
 console.log(student.greeting2());
