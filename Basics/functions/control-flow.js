// if

// if(2 ==="2"){
//    console.log("two");
// }else{
//     console.log("not equal to two");
// }

// // >(greater than) , <(less than), <=, >=, ==, !=, ===

// score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
//console.log(`user power : ${power}`);

const balance = 1000

//if (balance > 500) console.log("test");

/*if (balance < 500){
    console.log("less than");
}else if (balance <750){
    console.log("less than 750");
}else if(balance< 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
*/
const userLoggedIn = true
const debitCard = true
const usedemail = false
if(userLoggedIn && debitCard){          //and
    console.log("Allow to buy ");
}

if(userLoggedIn || debitCard){          //or
    console.log("logged in");
}