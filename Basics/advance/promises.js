const promiseone = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
        //console.log('Asunc task is complete');
        resolve()
    },1000)
})

promiseone.then(function(){
    //console.log("promise consumed ");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("Async task 2");
        resolve()
    },1000)


}).then(function(){
    //console.log("resolve ho gya");
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user :"chai",email :"name@gmail.com"})
    },1000)
}) 
promisethree.then(function(user){
    //console.log(user);
},3000)


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({user :"chai",email :"name@gmail.com"})
        }else{
            reject('ERROR KUCH GLAT HUA HAI')
        }
    },1000)
}) 
promisefour.then((user)=>{
    console.log(user);
    return user.user
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("finally chall gya jai "))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user :"chai",email :"name@gmail.com"})
    },1000)
}) 

async function consume(){
    try{
        const response = await promisefive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consume()

async function getuser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data);
    }catch(error){
        console.log("E:",error);
    }
} 

getuser()