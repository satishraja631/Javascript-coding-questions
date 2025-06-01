// 30. Remove a property from an object without mutating the original
// Return a new object without the given key.

// Input:removeProp({ a: 1, b: 2 }, 'b')
// Output:{ a: 1 }

let obj={ a: 1, b: 2 ,c:3,d:5}, key='d'
function removeProp(obj,prop){
    let result={}
    for(let key of Object.keys(obj)){
        if(key!==prop){
           result[key]=obj[key]
        }
    }

    return result;
}

console.log(removeProp(obj,key))