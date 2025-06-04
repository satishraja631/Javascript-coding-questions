let nums=[1,2,3]

function Spread(nums){
    let res=[...nums]
    
    return res
}

console.log(Spread(nums));


function RestOperator(...args){
    console.log(...args,'rest operator args')

    
}

console.log(RestOperator(1,2,3),'rest operator')

