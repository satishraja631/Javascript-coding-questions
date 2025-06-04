// 29. Shuffle an array randomly (Fisher-Yates)
// Randomly reorder elements in-place.

// Input: [1, 2, 3]

// Output: (random e.g.) [2, 1, 3]

const input=[1,2,3];

function fisherYates(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }

    return arr;
}



console.log(fisherYates(input))

const sortedInput=input.sort(()=>Math.random()-0.5)
console.log(sortedInput,'using sort')