
function calculatePrice(...num1){             //passing multiple values
    return num1
}
console.log(calculatePrice(2,3,4,5));
const user = {
    user: "binod",
    price :1234
}
function  handle(anyobject) {
    console.log(`username is ${anyobject.user} and price is${user.price}`);
}
handle(user)

const arr = [3,45,67]
function returnvalue(getArray){
    return getArray[1]
}
console.log(returnvalue([2,3,456,6,]));