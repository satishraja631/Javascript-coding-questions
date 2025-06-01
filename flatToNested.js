// 8. Convert flat object to nested object
// Unflatten keys with dot notation back to nested structure.

// Input:{ 'a.b.c': 1 }
// Output:{ a: { b: { c: 1 } } }

let obj={ 'a.b.c': 1 }

function FlatObjectToNestedObject(obj){
    let result={}
    for(let flatKey in obj){
        let keys=flatKey.split('.')
        let current=result
        keys.forEach((key,index)=>{
            if(index===keys.length-1){
              current[key]=obj[flatKey]
            }else{
                current[key]=current[key] || {}
                current=current[key]
            }
        })
        
        
    }

    return result
}

console.log(FlatObjectToNestedObject(obj))
