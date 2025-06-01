// 28. Find the most frequent element in an array
// Find the value that appears the most.

// Input: [1, 2, 2, 3, 3, 3]

// Output: 3

let nums=[1, 2, 2, 3, 3, 3,2,2]

function mostFrequent(input){
    let max=0;
    let mostFrequentNum=null
    const map=input.reduce((acc,num)=>{
        acc[num]=(acc[num] | 0)+1
        if(acc[num]>max){
            max=acc[num]
            mostFrequentNum=num
        }
        return acc
    },{})

    return mostFrequentNum
}

console.log(mostFrequent(nums))