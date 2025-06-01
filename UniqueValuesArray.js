// 16. Get all unique values from an array of objects by key
// Use Set or map with filtering.

// Input: [{id:1}, {id:2}, {id:1}]

// Output: [1, 2]

const arr=[{id:1}, {id:2}, {id:1}]

const result=[...new Set(arr.map((obj)=>obj.id))]

console.log(result)