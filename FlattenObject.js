// 37. Convert nested object to a flat object
// Flatten all nested keys using dot notation.

// Input:{ a: { b: { c: 1 } } }
// Output:{ 'a.b.c': 1 }

let obj={ a: { b: { c: 1 },d:[1,2,3] } }

function flattenObject(obj,parentKey='',result={}){
    for(let key in obj){
        if(!obj.hasOwnProperty(key)) continue;
        parentKey=parentKey?`${parentKey}.${key}`:key;
        if(typeof obj[key]==='object' && obj[key]!==null && !Array.isArray(obj[key])){
            flattenObject(obj[key],parentKey,result)
        }
        else{
            result[parentKey]=obj[key]
        }
    }

    return result;
}

console.log(flattenObject(obj))