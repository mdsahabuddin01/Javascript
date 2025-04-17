//Given an array, arr of n integers, and an integer element x, 
//find whether element x is present in the array. Return the
//index of the first occurrence of x in the array, or -1 if it doesn’t exist.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];


function Lsearch(arr, n){
  for (let i = 0; i < arr.length; i++){
    if(arr[i] == n){
      return i;
    }
  }
  return -1;
}

let n = 10;

console.log(Lsearch(arr, n));
