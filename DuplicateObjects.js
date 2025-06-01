// 40. Find duplicate objects in an array based on a key
// Return objects that share the same key value.

// Input:[{id: 1}, {id: 2}, {id: 1}]
// Output:[{id: 1}, {id: 1}]

let arr=[{id: 1}, {id: 2}, {id: 1}]
function FindDuplicateObjects(arr){

    const countMap={}

    for(let obj of arr){
        const value=obj['id']
        countMap[value]=(countMap[value] | 0) +1;
    }

    return arr.filter(obj=>countMap[obj['id']]>1)

}

console.log(FindDuplicateObjects(arr))