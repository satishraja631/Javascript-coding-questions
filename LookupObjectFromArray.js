// 35. Create a lookup object from an array (keyed by ID)
// Convert an array to an object using a unique field.

// Input:[{ id: 'a', value: 1 }, { id: 'b', value: 2 }]
// Output:{ a: { id: 'a', value: 1 }, b: { id: 'b', value: 2 } }

let arr=[{ id: 'a', value: 1 }, { id: 'b', value: 2 }]

function LookupObjectWithKey(arr){
    const result=arr.reduce((acc,obj)=>{
        acc[obj.id]=obj

        return acc
    },{})

    return result
}

console.log(LookupObjectWithKey(arr))

