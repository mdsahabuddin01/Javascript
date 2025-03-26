//Write a JavaScript program to find the maximum number in an array. 
function findMaxNumber(arr){
  if (arr.length === 0){
    console.log("Array is empty");
  }
  
  let max = arr[0];
  
  for (let i = 1; i <= arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }  
  }
  
  return max;
}


const numbers = [5, 12, 8, 21, 3, 42];

const maxNumber = findMaxNumber(numbers);

console.log("The maximum number is: "+ maxNumber);
