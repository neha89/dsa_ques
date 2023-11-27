// Write a program to store first n prime numbers in an array . After storing return the array.﻿
// Input:-
// n=5
// Output:- Return the output in the form of an array.
// 2
// 3
// 5
// 7
// 11
function store_first_n_prime(num){
    let arr=[];
    let n=2;
    let counter=0;
    while(counter < num){
        let flag= true;
        for(let i=2; i<n; i++){
            if(n%i ==0){
                flag= false;
                break;
            }
        }
        if(flag){
            arr[counter]=n;
            counter = counter+1;
        }
        n = n+1;
    }
    return arr;
}

console.log(store_first_n_prime(7)); 