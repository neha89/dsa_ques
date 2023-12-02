const str= 'javascript';

function reverse_str(str){
    let output = '';

    for(let i=str.length-1; i>=0; i--){
        output = output + str[i];
    }
    return output;
}
console.log(reverse_str('kamini'));