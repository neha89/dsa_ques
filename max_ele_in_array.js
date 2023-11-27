let arr=[2,40,5,7,3];

function find_max(arr){
    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max=arr[i];
        }
    }
    return max;
}

console.log(find_max(arr));