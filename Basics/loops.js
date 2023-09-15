// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
     
}

for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(`outer loop ${i}`);
    for (let j = 1; j <=10 ;j++) {
        const element = j;
        //console.log(` Inner loop value ${j} and outer loop ${i}`);
        //console.log(i + '*' + j + "=" + i*j);
    }
}

let myArray = ["ravi","shivam","tushar","naveen"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

//break and continue
//break is used to break the control flow after it takes out of the iteration

for (let index = 0; index <= 20 ; index++) {
    if(index==5){
        //console.log("detected 5");
        break
    }
    //console.log(`Value of i is ${index}`);
    
}

//continue
//The main difference between break and continue is that break is used for immediate termination of loop. On the other hand, 'continue' terminate the current iteration and resumes the control to the next iteration of the loop.
for (let index = 0; index <= 20 ; index++) {
    if(index==5){
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is ${index}`);
    
}
