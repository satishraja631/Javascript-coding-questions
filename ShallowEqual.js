// 31. Compare two objects for shallow equality
// Only compare top-level keys/values.

// Input:{ a: 1, b: 2 }, { b: 2, a: 1 }
// Output: true

let obj1={ a: 1, b: 2,c:{d:3} }, obj2={ b: 2, a: 1, c:{d:3} }

function shallowEqual(obj1,obj2){
    let keys1=Object.keys(obj1);
    let keys2=Object.keys(obj2);

    if(keys1.length!==keys2.length) return false;

    for(let key of keys1){
        if(obj1[key]!==obj2[key]) return false
    }

    return true
}

console.log(shallowEqual(obj1,obj2))