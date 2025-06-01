// 17. Convert array of key-value pairs to object
// Use Object.fromEntries().

// Input: [['a', 1], ['b', 2]]

// Output: { a: 1, b: 2 }

let arr=[['a', 1], ['b', 2]];

const object=Object.fromEntries(arr)

console.log(object)

//iterative solution

function arrayToObject(arr){
    let obj={}

    for(let i=0;i<arr.length;i++){
        let key=arr[i][0]
        let value=arr[i][1]

        obj[key]=value
    }

    return obj
}

console.log(arrayToObject(arr))


//using reduce

const obj=arr.reduce((acc,[key,value])=>{
    acc[key]=value
    return acc
},{})

console.log(obj)