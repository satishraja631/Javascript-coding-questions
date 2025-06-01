// 36. Extract a subset of keys from an object
// Pick only certain keys into a new object.

// Input:pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// Output:{ a: 1, c: 3 }

let obj={ a: 1, b: 2, c: 3 }, arr= ['a', 'c'];

function pick(obj,arr){
    let result={}
    for(let key of arr){
        result[key]=obj[key]
    }

    return result
}


console.log(pick(obj,arr))