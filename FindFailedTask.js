//find the first failed task in the array of objects. array is sorted such that all success comes first

let arr=[
    {id:1,status:'success'},
    {id:2,status:'success'},
    {id:3,status:'success'},
    {id:4,status:'failed'},
    {id:5,status:'failed'},
    {id:6,status:'failed'}

]

function FindFailedObjects(arr){
    let low=0;
    let high=arr.length-1
    let result=null
    while(low<=high){
        let mid=Math.floor((low + high) / 2);
        const status=arr[mid].status
        
        if(status==='failed'){
            high=mid-1
            result=arr[mid]
           
            
        }else{
            low=mid+1
        }

    }

    return result
}

console.log(FindFailedObjects(arr))