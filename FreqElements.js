// there is an array of numbers we need to count the frequency of elements 
// and return an object with number as key and count as value


//approach1  : using map to track of elements count
function freqElements(nums){
    let map={}
    for(let i=0;i<nums.length;i++){
        let elem=nums[i]
        map[elem]=(map[elem] | 0 )+1
    }

    return map;

}

let num=[1,2,2,3,1,1]
console.log(freqElements(num),'using map')


//approach2 using reduce function

const frequencyOfElements=num.reduce((acc,num)=>{
    acc[num]=(acc[num] |0) +1

    return acc
},{})

console.log(frequencyOfElements,'using reduce function')