// find the intersection of two arrays

let arr1=[1,2,3,4]
let arr2=[3,4,5,6]

function arrayIntersection(arr1,arr2){
    let set=new Set(arr1)
    let result=[]

    for(let num of arr2)
    {
        if(set.has(num)){
            result.push(num)
            set.delete(num)
        }
    }

    return result;

}

console.log(arrayIntersection(arr1,arr2))