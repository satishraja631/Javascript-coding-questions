// 33. Remove properties with falsy values from an object
// Keep only truthy values.

// Input: {a: 0, b: null, c: 'hello' }
// Output:{ c: 'hello' }


let obj={a: 0, b: null, c: 'hello' }

function removeFalsyFromObjects(obj){
    let result={}
    for(let key in obj){
        if(obj[key]){
            result[key]=obj[key]
        }
    }

    return result;
}


console.log(removeFalsyFromObjects(obj))


//without using new object and modifying the input object. delete keys from the object

function removeFalsyFromObjectInPlace(obj){
    for(let key in obj){
        if(!obj[key]){
            delete obj[key]
        }
    }

    return obj
}

console.log(removeFalsyFromObjectInPlace(obj),'using inplace')


