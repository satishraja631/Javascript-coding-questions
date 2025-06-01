const nums=[1,2,3,4,5];


// using reduce
const sum=nums.reduce((a,b)=>{
    return a+b
},0)

console.log(sum,'using reduce')


//without using higher order functions

const Sum=(nums)=>{
    let result=0;
    for(let i=0;i<nums.length;i++){
        result+=nums[i]
    }
    return result;
}


console.log(Sum(nums),'without using reduce')

