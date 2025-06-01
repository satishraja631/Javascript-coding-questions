//merge two sorted arrays

let nums1=[1,3,5]
let nums2=[2,4,6]

//using sort
function mergeArrays(nums1,nums2){
    let result=[...nums1,...nums2];

    return result.sort((a,b)=>a-b)
    

}   //time complexity: O(n+m)*log(n+m)

console.log(mergeArrays(nums1,nums2))

//without using sort. two pointers approach

function mergeSortedArrays(nums1,nums2){
    let merged=[];
    let i=0,j=0;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            merged.push(nums1[i])
            i++;
        }else{
            merged.push(nums2[j])
            j++;
        }
    }

    while(i<nums1.length){
        merged.push(nums1[i])
        i++;

    }
    while(j<nums2.length){
        merged.push(nums2[j])
        j++;
    }
    
    return merged;
}  //time complexity O(n+m)

console.log(mergeSortedArrays(nums1,nums2),'using two pointer')


