// 32. Compare two objects for deep equality
// Recursively compare nested structures.

// Input:{ a: { b: 1 } }, { a: { b: 1 } }
// Output: true

let a={ a: { b: 1 } },b= { a: { b: 2 } }

function deepEqual(a,b){
   if(a===b) return true;

   if(typeof a!=='object' || typeof b!=='object' || a===null || b===null){
    return false
   }

   let keys1=Object.keys(a);
   let keys2=Object.keys(b);

   for(let key of keys1){
    if(!keys2.includes(key) || !deepEqual(a[key],b[key])){
        return false
    }
   }

   return true;
}

console.log(deepEqual(a,b))