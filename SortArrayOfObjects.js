// 26. Sort array of objects by a specific key
// Sort by a numeric or string key in object.

// Input: [{id: 2}, {id: 1}]
// Output: [{id: 1}, {id: 2}]

let input=[{id: 2}, {id: 1},{id:4},{id:3}]
const sortedArr=input.sort((a,b)=>a.id-b.id)

console.log(sortedArr)