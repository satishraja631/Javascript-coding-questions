// 19. Remove falsy values from an array
// Filter values with Boolean.

// Input: [0, 1, false, 2, '', 3]

// Output: [1, 2, 3]

let arr=[0, 1, false, 2, '', 3];

let truthyValues=arr.filter(Boolean)
console.log(truthyValues)


// 20. Count number of truthy values in an array
// Filter and get length.

// Input: [0, 1, '', 'hello', null]

// Output: 2

let Input= [0, 1, '', 'hello', null]

const count=Input.filter(Boolean).length
console.log(count)