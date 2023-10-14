//Object literals
const user = {
    username : "Animesh",
    loginCount : 3,
    signnedIn : true,

    getUserDetails : function(){
        //console.log("Got data from database");
        console.log(this);
    } 
}

// console.log(user);
//console.log(user.g etUserDetails( ));
//console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,signnedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signnedIn= signnedIn

    return this 
}

const userOne =new User("Ravi",6,false)
console.log(userOne);

