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