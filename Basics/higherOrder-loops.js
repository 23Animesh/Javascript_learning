 // for of
//  ["","",""]
//  [{},{},{}]

const arr = [1,2,3,4,5,6]
const message = "hello"
//for of loop
for (const num of message) {
    //console.log(num);
}

//Maps is similar to object but doesnot contains duplicate values

const map = new Map()
map.set('IN',"India")
map.set('USA','United states of America')
//console.log(map);

for (const [key,value]  of map) {
    //console.log(key,":-",value);    
}

//for of doesnot work in objects 

const myObj = {
    js : "javascript",
    cpp :"c++",
    py : "python",
    j : "java"
}
//for in
for (const keys in myObj) {
    //console.log("The key value pair given is ",keys,":-",myObj[keys]);
}
const Arr = [1,23,4,5,67,67,7]
for (const key in Arr) {
    //console.log(Arr[key]);
}
const coding = ["nm","mn","js","ihjs"]

coding.forEach( function name(item) {
    //console.log(item); 
})

// function print(item){
//     console.log(item);
// }
// print("ramesh")

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        language : "js",
        operator : "human",
        score :17
    },
    {
        mi : "kain",
        ty : "some"
    }
]
myCoding.forEach( (item) => {
    console.log(item.language);
})