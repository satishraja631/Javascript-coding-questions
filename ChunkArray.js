//Chunk an array into groups of a given size
// Split an array into subarrays of size n.

// Input: [1, 2, 3, 4, 5], size 2

// Output: [[1, 2], [3, 4], [5]]


//iterative approach .Time complexity O(n)

function ChunkArray(arr,size){
    let result=[]

    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    
    return result;
}

let arr=[1, 2, 3, 4, 5], size=2

console.log(ChunkArray(arr,size))


//recursive approach. Time Complexity O(n)

function recursiveChunkArray(arr,size){
    if(arr.length===0) return [];

    return [arr.slice(0,size),...recursiveChunkArray(arr.slice(size),size)]
}

console.log(recursiveChunkArray(arr,size),'using recursion')


