//Remove duplicates numbers from an array of numbers

//approach 1: using set;

nums=[1,2,2,3,4,4,5]
const uniqueElements=[...new Set(nums)]
console.log(uniqueElements,'using Set')


//approach 2 : filter

const uniqElems=nums.filter((value,index,self)=>{
    return self.indexOf(value)===index
})

console.log(uniqElems,'using filter')

//approach3: without using higher order functions

function removeDuplicates(nums){
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }
    }

    return result;
}

console.log(removeDuplicates(nums),'without using higher order functions')