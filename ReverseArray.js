//reverse an aray without using reverse function

let nums=[1,2,3,4,5,6]

function reverseNums(nums){
    let result=[]
    for(let i=nums.length-1;i>=0;i--){
        result.push(nums[i])
    }

    return result;

}

console.log(reverseNums(nums))


//using reverse;

const reversedArray=[...nums].reverse()

console.log(reversedArray)