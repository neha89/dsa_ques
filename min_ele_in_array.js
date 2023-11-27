let arr=[2,40,5,7,3];

function find_min(arr){
    let min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]< min){
            min=arr[i];
        }
    }
    return min;
}

console.log(find_min(arr));