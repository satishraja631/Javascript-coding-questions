//flatten a nested array;

let arrays=[1,[2,3],4,5,6];

let deepNested=[1,[2,3,[4,5,6,[7,8,9]]]]

let flatArray=arrays.flat()

console.log(flatArray)

console.log(deepNested.flat(3),'deeply nested')

//recursive solution


function flattenArray(arr){
    let result=[];

    for(let element of arr){
        if(Array.isArray(element)){
            result=result.concat(flattenArray(element))
        }else{
            result.push(element);
        }
    }

    return result;
}

console.log(flattenArray(deepNested),'without using flat function')

function flatsArray(arr){
    const result=arr.reduce((acc,elem)=>{
        if(Array.isArray(elem)){
            acc=acc.concat(flatsArray(elem))
        }else{
            acc.push(elem)
        }

        return acc
    },[])

    return result
}

console.log(flatsArray(deepNested),"using reduce");