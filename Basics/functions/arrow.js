const user = {                           //this is used for current context
    username : "Animesh",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);
        //console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "ola"
// user.welcomeMessage()
console.log(this);

// function one(){
//     console.log(this);
// }
 const chai = () => {
    let username = "hitesh"
    console.log(this.username);

}

//chai()
const addTwo  = (num1,num2) => (num1+num2) 
console.log(addTwo(4,2));

const myArr = [ 12,34,56,7,8,9,9]
