//Return the first non repeating element

let elements=[1,1,2,3,2,4,1]

function NonRepeatingElements(nums){
    let map={}
    for(let num of nums){
        map[num]=(map[num] | 0)+1;
    }

    for(let key of Object.keys(map)){
        if(map[key]===1){
            return key
        }
    }

    return -1
}

console.log(NonRepeatingElements(elements))