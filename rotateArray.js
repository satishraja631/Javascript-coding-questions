// Rotate an array by k positions
// Rotate right by k using slicing.

// Input: [1, 2, 3, 4, 5], k = 2

// Output: [4, 5, 1, 2, 3] 

//using slice approach. TC: O(n)


let nums=[1, 2, 3, 4, 5], k = 2
function Slice(nums,k){
    let n=nums.length;
    return nums.slice(-k).concat(nums.slice(0,n-k))
}

console.log(Slice(nums,k))


//using iterative approach . TC: O(n)

function rotateArray(nums,k){
    let n=nums.length;
    let result=[];
     k=k%n  //handle k>n

     for(let i=n-k;i<n;i++){
        result.push(nums[i])
     }

     for(let i=0;i<n-k;i++){
        result.push(nums[i])
     }

     return result
}

console.log(rotateArray(nums,k))