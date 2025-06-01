// check if two arrays are equal . Same size and same order;

function EqualArrays(arr1,arr2){
    if(arr1.length!==arr2.length) return false;

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]) return false;
    }

    return true;
}

let nums1=[1,2,3,4]
let nums2=[1,2,3,4]
let nums3=[1,3,2,4]

console.log(EqualArrays(nums1,nums2))
console.log(EqualArrays(nums2,nums3))


//check two arrays are equal irrespective of order

function EqualArrays2(arr1,arr2){
    if(arr1.length!==arr2.length) return false;
    let sum1=arr1.reduce((a,b)=>a+b);
    let sum2=arr2.reduce((a,b)=>a+b);

    return sum1===sum2
}

console.log(EqualArrays2(nums1,nums2))
console.log(EqualArrays2(nums2,nums3))