//find the smallest and largest elements of array.


let nums=[4,1,7,2];

const max=Math.max(...nums)
const min=Math.min(...nums)

console.log(max,min)

function minMax(nums){
  let max=nums[0];
  let min=nums[0];

  for(let i=1;i<nums.length;i++){
    if(nums[i]>max){
        max=nums[i]
    }
    if(nums[i]<min){
        min=nums[i]
    }
  }

  return [max,min]
}

console.log(minMax(nums))
