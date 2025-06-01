// 34. Merge two objects with priority to the second
// Second object overrides the first for shared keys.

// Input:merge({ a: 1, b: 2 }, { b: 3, c: 4 })
// Output:{ a: 1, b: 3, c: 4 }

let a={ a: 1, b: 2 }, b={ b: 3, c: 4 }

function mergeObjectsWithPriority(a,b){
    let keys=[...new Set([...Object.keys(a),...Object.keys(b)])];
    let result={}
    for(let key of keys){
        result[key]=b[key] || a[key]
     
   }

   return result
}

console.log(mergeObjectsWithPriority(a,b))
