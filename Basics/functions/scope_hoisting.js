function one(){
    const username = "Animesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
two()
}

one()

if (true) {
    const username = "ravi"
    if (username ==="ravi"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
console.log(addone(5));

function addone(num){
    return num + 1
}

//console.log(addTwo(5));           cannot call it before the function
const addTwo = function(num){
    return num+2
}
