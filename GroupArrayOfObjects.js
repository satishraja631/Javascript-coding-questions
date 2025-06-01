// 27. Group array of objects by a property
// Group by a common key into an object.

// [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'veg', name: 'carrot'}]

// {fruit: [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}],
//   veg: [{type: 'veg', name: 'carrot'}]
// }


input=[{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'veg', name: 'carrot'}];


//solution using reduce . time complexity is O(n)
function groupObjects(input){
    const result=input.reduce((acc,obj)=>{
        let type=obj.type
        if(acc[type]!==undefined){
            acc[type].push(obj)
        }else{
            acc[type]=[obj]
        }

        return acc
    }
    ,{})

    return result
}

console.log(groupObjects(input))


//solution without reduce.

function groupArrayObjects(input){
    let result={}
    for(let obj of input){
        const type=obj.type
        if(result[type]!==undefined){
            result[type].push(obj)
        }else{
            result[type]=[obj]
        }
    }

    return result;
}

console.log(groupArrayObjects(input),'iterative solution')
