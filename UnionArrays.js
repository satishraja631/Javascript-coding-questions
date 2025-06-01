//find the union of two arrays

let nums1=[1,2,3]
let nums2=[2,3,4]

const union=[...new Set([...nums1,...nums2])]
console.log(union)